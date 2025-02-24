import axios from "axios";
import { notification } from "ant-design-vue";
// 对 axios 的封装
function request(options) {
  return axios(options)
    .then(res => res)
    .catch(err => {
      const {
        response: { status, statusText }
      } = err;
      notification.error({
        // eslint-disable-next-line no-unused-vars
        message: h => (
          <div>
            请求错误<span style="color:red;">{status}</span> : {options.url}
          </div>
        ),
        description: statusText
      });
      return Promise.reject(err);
    });
}

export default request;
