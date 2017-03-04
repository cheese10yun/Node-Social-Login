/**
 * Created by cheese on 2017. 3. 4..
 */
module.exports = {
  'secret' :  '',
  'db_info': {
    local: { // localhost
      host: '',
      port: '',
      user: '',
      password: '',
      database: ''
    },
    real: { // real
      host: '',
      port: '',
      user: '',
      password: '',
      database: ''
    },
    dev: { // dev
      host: '',
      port: '',
      user: '',
      password: '',
      database: ''
    }
  },
  'federation' : {
    'naver' : {
      'client_id' : '',
      'secret_id' : '',
      'callback_url' : '/auth/login/naver/callback'
    },
    'facebook' : {
      'client_id' : '',
      'secret_id' : '',
      'callback_url' : '/auth/login/facebook/callback'
    },
    'kakao' : {
      'client_id' : '',
      'callback_url' : '/auth/login/kakao/callback'
    }
  }
};