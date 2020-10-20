// import Home from './views/Home.vue';
// import Detail from './views/DestinationDetail.vue';
// import Experience from './views/Experience.vue'
// import NotFound from './components/NotFound.vue'
import store from './store.js'

const NotFound = resolve=>{
    require.ensure(['./components/NotFound.vue'],()=>{
        resolve(require('./components/NotFound.vue'));
    });
};
const Experience = resolve=>{
    require.ensure(['./views/Experience.vue'],()=>{
        resolve(require('./views/Experience.vue'));
    });
};
const Detail = resolve=>{
    require.ensure(['./views/DestinationDetail.vue'],()=>{
        resolve(require('./views/DestinationDetail.vue'));
    });
};
const Home = resolve=>{
    require.ensure(['./views/Home.vue'],()=>{
        resolve(require('./views/Home.vue'));
    });
};


export const routes =[
    {
        path:'/',
        name:"home",
        component: Home,
    },
      {
        path:'/destinationDetail/:id',
        name:"detail",
        component: Detail,
        props:true,
        children:[{
            path:':experienceSlug',
            name:'experieceDetail',
            component:Experience,
            props:true,
        }],
        beforeEnter: (to, from, next) => {
            const exists=store.destinations.find(
                destination=>destination.id==to.params.id
            )
            if(exists){
                next();
            }else{
                next({name:'notFound'})
            }
        }
    },
    {
        path:'/404',
        alias:'*',
        name:'notFound',
        component:NotFound
    }
];