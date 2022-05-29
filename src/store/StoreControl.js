import { createStore } from 'vuex';
// import axios from 'axios';
let ProductToStoreItems = window.localStorage.getItem('ProductToStoreItems');
let componentSidebar = window.localStorage.getItem('componentSidebar');
const storeControl = createStore({
    state: {
        ProductToStoreItems: ProductToStoreItems ? JSON.parse(ProductToStoreItems) : [],
        componentSidebar: componentSidebar ? JSON.parse(componentSidebar) : "acount",
    },
    mutations: {
        SET_Component(state, componentSidebar) {
            state.componentSidebar = componentSidebar;
            this.commit('savedata2');
          },
        ProductToStoreItems: (state, connections) => {
            state.ProductToStoreItems = connections;
        },
        addProductToStore(state, payload) {
            let item = payload;
            item = { ...item };
            state.ProductToStoreItems.push(item);
            this.commit('savedata');
        },
        savedata(state) {
            window.localStorage.setItem(
                'ProductToStoreItems', 
                JSON.stringify(state.ProductToStoreItems)
            );
           
            
        },
        savedata2(state) {
            window.localStorage.setItem(
                'componentSidebar', 
                JSON.stringify(state.componentSidebar)
            );
            
        },
    },
    actions: {
        addProductToStore: (context, payload) => {
            context.commit('addProductToStore', payload);
        },
     
    },
    getters: {
   
    },
});

export default storeControl;
