// let data = [{ title: "web全栈" }, { title: "java架构师" }];

// export default {
//   // "method url": Object 或 Array
//   // "get /api/goods": { result: data },

//   // "method url": (req, res) => {}
//   "get /api/goods": function(req, res) {
//     setTimeout(() => {
//       res.json({ result: data });
//     }, 1000);
//   }
// };


let course = {
  data:{
    'Javascript':[
      {
        id:1,
        name:'ES6语法实战',
        img:'LearnES6_Final.png',
        price:'100',
        solded:'561',
      },
      {
        id:2,

        name:'Typescript实战',
        img:'Typescript_Plumbing_image.png',
        price:'100',
        solded:'156',
      },
      {
        id:3,

        name:'Javascript算法实战',
        img:'JSBasic-Algorithms_Final.png',
        price:'100',
        solded:'526',
      },

    ],

    'React':[
      {
        id:4,

        name:'React入门',
        img:'ReactBeginners.png',
        price:'100',
        solded:'536',
      },
      {
        id:5,

        name:'ReactNative开发自己的APP',
        img:'ReactNative.png',
        price:'100',
        solded:'456',
      },
      {
        id:6,

        name:'React服务端渲染实战',
        img:'ReactNextServer_Final.png',
        price:'100',
        solded:'556',
      },
      {
        id:7,

        name:'Redux Sage中间件实战',
        img:'ReduxSaga.png',
        price:'100',
        solded:'2256',
      },
      {
        id:8,

        name:'试用react开发PWA应用',
        img:'PWAReact_Final.png',
        price:'100',
        solded:'1156',
      },
      {
        id:9,

        name:'React Hooks实战',
        img:'SimplifyHooks_Final.png',
        price:'100',
        solded:'5361',
      },
      {
        id:10,

        name:'React Mobx状态管理实战',
        img:'React_Mobx_TS.png',
        price:'100',
        solded:'956',
      },
    ],
    'Vuejs':[
      {
        id:11,

        name:'Vue进阶实战',
        img:'VueJS_Final.png',
        price:'180',
        solded:'586',
      },
      
      {
        id:12,

        name:'Vuejs开发pwa应用',
        img:'VuePwa.png',
        price:'100',
        solded:'596',
      },
      {
        id:13,

        name:'试用TS开发Vuejs应用',
        img:'TSVue_Final.png',
        price:'100',
        solded:'526',
      },
      
    ],
    'Git':[
      {
        id:14,

        name:'Github从入门到精通',
        img:'github.png',
        price:'99',
        solded:'10',
      },
      {
        id:15,

        name:'Git版本控制实战',
        img:'LearnGit.png',
        price:'49',
        solded:'180',
      },
      
    ],
    'Test':[
      {
        id:16,

        name:'Puppetee测试入门',
        img:'TestGooglePuppeteer_Final.png',
        price:'10',
        solded:'56',
      },
      {
        id:17,

        name:'使用jest测试你的React项目',
        img:'TestReactJest.png',
        price:'30',
        solded:'10',
      },
    ],
    'Python':[
      {
        id:18,

        name:'Python从入门到精通',
        img:'IntroPython.png',
        price:'100',
        solded:'56',
      },
    ],
    'Node.js':[

      {
        id:19,

        name:'使用Docker部署你的nodejs',
        img:'NodeDocker_1000.png',
        price:'100',
        solded:'56',
      },
      {
        id:20,

        name:'在AWS环境部署nodejs',
        img:'NodeAWSServerless_Final.png',
        price:'100',
        solded:'56',
      },

    ],
    'GraphQL':[
      {
        id:21,

        name:'GraphQL从入门到精通',
        img:'GraphQL_Final.png',
        price:'100',
        solded:'56',
      },
    ]
  },
  tags:['Javascript','React','Vuejs','Git','Test','Python','Node.js','GraphQL']
}

course.tags.forEach(tag=>{
  course.data[tag].forEach(v=>{
    v.tag = tag
  })
})
export default {
  'get /api/goods'(req,res,next){
    setTimeout(()=>{
      res.json({
        code:0,
        data:course
      })
    },1000)
  },
  'get /api/detail'(req,res,next){
    const {id} = req.query
    course.tags.forEach(key=>{
      course.data[key].forEach(cor=>{
        console.log(cor.id,id)
        if(cor.id==id){
          cor.desc=`北京开课吧科技有限公司，简称开课吧，是慧科集团旗下高端互联网职业教育平台。
          作为互联网从业者职业成长平台，开课吧致力于高效连接人与职业，
          基于创新科技提供智慧学习服务，通过线上班级在 kaikeba.com 的交付，
          用一线企业的实效实战教育产品，为互联网人提供职业成长服务。
          目前推出在线课程有:
          《Web全栈架构师》《JavaEE企业级分布式高级架构师》《百万年薪架构师》
          《Python爬虫商业项目班》《UXD全栈设计师》《产品经理特训营》《机器学习特训营》`
          return res.json({
            code:0,
            data:{
              detail:cor,
            }
          })
        }
      })
    })
  },
  'post /api/login'(req,res,next){
    const {username,passwd} = req.body
    console.log(username,passwd)
    if(username=='kaikeba' && passwd=="123"){
      return res.json({
        code:0,
        data:{
          token:'kaikebaisgood',
          role:'admin',
          balance:1000,
          username:"kaikeba"
        }
      })
    }
    if(username=='dasheng' && passwd=="123"){
      return res.json({
        code:0,
        data:{
          token:'kaikebaisgood',
          role:'user',
          balance:100,
          username:'dasheng'
        }
      })
    }
    return res.json({
      code:-1,
      msg:'密码错误'
    })
  }
}
