import axios from 'axios'
import { Notification, MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import errorCode from '@/utils/errorCode'

axios.defaults.headers['Content-Type']='application/json;charset=utf-8'

const service =axios.create({
    baseURL:process.env.VUE_APP_BASE_API,
    timeout:10000
})

service.interceptors.request.use(config=>{
    const isToken=(config.headers|| {}).isToken===false
        if (getToken()&&!isToken){
            config.headers['authorization'] = 'Bearer' +getToken()
        }
        return config        
    },
        error=>{console.log(error)
        Promise.reject(error)
        })
        service.interceptors.response.use(res=>{

            const code =res.data.code || 200;
            const message =errorCode[code]||res.date.msg||errorCode['default']
            if(code===401){
                MessageBox.confirm(
                    '登录状态已过期，您可以继续留在该页面，或者重新登录',
                    '系统提示',
                    {
                        confirmButtonText: '重新登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                      }
                ).then(()=>{
                    store.dispatch('LogOut').then(()=>{
                        location.reload();
                    })

                })
                
            } else if(code ===500){
                Message({
                    message:message,
                    type:'error'
                })
                return Promise.reject('error')

            }else{return res.date}

        },
        error=>{console.log('err'+error)
        Message({
            message:error.message,
            type:'error',
            duration:5*1000

        })
        return Promise.reject(error)
    }
        
        )
export default service