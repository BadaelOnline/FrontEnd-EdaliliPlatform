import { createStore } from 'vuex';
import axios from 'axios';
import jeson from '@/jeson/MOCK_DATA.json';
import data from '@/jeson/data';
let cartItems = window.localStorage.getItem('cartItems');
let cartItemCount = window.localStorage.getItem('cartItemCount');
let lang = window.localStorage.getItem('lang');
const store = createStore({
    state: {
        // APi
        Stores: [],
        store: [],
        Sections: [],
        Product: [],
        ProductID: [],
        productById: [],
        Brand: [],
        Brands: [],
        Categories: [],
        CategoryID: null,
        priceArray: [],
        Doctors: [],
        MedicalDevice: [],
        Hospitals: [],
        Specialty: [],
        doctor: null,
        ////////////////
        // Product: jeson[0].Products,
        stores: data.stores,
        restaurants: data.restaurants,
        lastStores: jeson[0].lastStores,
        brands: jeson[0].brands,
        categories: jeson[0].categories,
        cartItemCount: cartItemCount ? JSON.parse(cartItemCount) : 0,
        cartItems: cartItems ? JSON.parse(cartItems) : [],
        //auth
        token: null,
        user: null,
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        cartItems: (state, connections) => {
            state.cartItems = connections;
        },
        addToCart(state, payload) {
            let item = payload;
            item = { ...item, quantity: 1 };
            if (state.cartItems.length > 0) {
                let bool = state.cartItems.some(
                    (i) => i.id_store === item.id_store
                );
                if (bool) {
                    let itemIndex = state.cartItems.findIndex(
                        (el) => el.id_store === item.id_store
                    );
                    state.cartItems[itemIndex]['quantity'] += 1;
                } else {
                    state.cartItems.push(item);
                }
            } else {
                state.cartItems.push(item);
            }
            state.cartItemCount++;
            this.commit('savedata');
        },
        savedata(state) {
            window.localStorage.setItem(
                'cartItems',
                JSON.stringify(state.cartItems)
            );
            window.localStorage.setItem(
                'cartItemCount',
                JSON.stringify(state.cartItemCount)
            );
        },
        removeItem(state, payload) {
            if (state.cartItems.length > 0) {
                let bool = state.cartItems.some((i) => i.id === payload.id);
                if (bool) {
                    let index = state.cartItems.findIndex(
                        (el) => el.id === payload.id
                    );
                    if (state.cartItems[index]['quantity'] !== 0) {
                        state.cartItems[index]['quantity'] -= 1;
                        state.cartItemCount--;
                        this.commit('savedata');
                    }
                    if (state.cartItems[index]['quantity'] === 0) {
                        state.cartItems.splice(index, 1);
                    }
                }
            }
        },
        removeFromCart(state, item) {
            let index = state.cartItems.indexOf(item);

            if (index > -1) {
                let product = state.cartItems[index];
                state.cartItemCount -= product.quantity;

                state.cartItems.splice(index, 1);

                this.commit('savedata');
            }
        },
        SET_Stores(state, Stores) {
            state.Stores = Stores;
        },
        SET_Store(state, store) {
            state.store = store;
        },
        SET_Products(state, Product) {
            state.Product = Product;
        },
        SET_ProductID(state, ProductID) {
            state.ProductID = ProductID;
        },
        SET_Brands(state, Brands) {
            state.Brands = Brands;
        },
        SET_Categories(state, Categories) {
            state.Categories = Categories;
        },
        SET_CategoryID(state, CategoryID) {
            state.CategoryID = CategoryID;
        },
        Delete_Category(state, itemsId) {
            let Categories = state.Categories.filter((v) => v.id != itemsId);
            state.Categories = Categories;
        },
        //doctors
        SET_Doctors(state, Doctors) {
            state.Doctors = Doctors;
        },
        SET_Doctor(state, Doctor) {
            state.Doctor = Doctor;
        },
        SET_MedicalDevice(state, MedicalDevice) {
            state.MedicalDevice = MedicalDevice;
        },
        SET_Hospitals(state, Hospitals) {
            state.Hospitals = Hospitals;
        },
        SET_Specialty(state, Specialty) {
            state.Specialty = Specialty;
        },
        //auth
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER(state, data) {
            state.user = data;
        },
        //register
        SET_TOKEN1(state, token) {
            state.token = token;
        },
    },
    actions: {
        addToCart: (context, payload) => {
            context.commit('addToCart', payload);
        },
        removeItem: (context, payload) => {
            context.commit('removeItem', payload);
        },
        loadStores({ commit }) {
            axios
                .get(`/api/stores/getAll?lang=${lang}`)
                .then((res) => {
                    console.warn('Stores :', res.data.Stores.data);
                    let Stores = res.data.Stores.data;
                    commit('SET_Stores', Stores);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadstore({ commit }, productId) {
            axios
                .get(`/api/stores/getById/${productId}?lang=${lang}`)
                .then((res) => {
                    console.warn('StorebyId :', res);
                    let store = res.data.Store;
                    commit('SET_Store', store);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadProducts({ commit }) {
            axios
                .get(`/api/products/getAll?lang=${lang}`)
                .then((res) => {
                    console.warn('Product :', res.data.Products.data);
                    let Product = res.data.Products.data;
                    commit('SET_Products', Product);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadProduct({ commit }, ProductID) {
            axios
                .get(`/api/products/getById/${ProductID}?lang=${lang}`)
                .then((res) => {
                    console.warn('ProductID :', res.data.product);
                    let ProductID = res.data.product;
                    commit('SET_ProductID', ProductID);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadBrands({ commit }) {
            axios
                .get(`/api/brands/getAll?lang=${lang}`)
                .then((res) => {
                    console.warn('Brands :', res.data.Brand);
                    let Brands = res.data.Brand;
                    commit('SET_Brands', Brands);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadCategories({ commit }) {
            axios
                .get(`/api/categories/getAll?lang=${lang}`)
                .then((res) => {
                    console.warn('Categories :', res.data.Category);
                    let Categories = res.data.Category;
                    commit('SET_Categories', Categories);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadCategory({ commit }, CategoryID) {
            axios
                .get(`/api/categories/getById/${CategoryID}?lang=${lang}`)
                .then((res) => {
                    console.warn('CategoryID :', res.data.Category);
                    let CategoryID = res.data.Category;
                    commit('SET_CategoryID', CategoryID);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        async deleteCategory({ commit }, items) {
            axios.put(
                `http://edalili.e-dalely.com/public/api/categories/trash/${items.id}`,
                commit('Delete_Category', items.id)
            );
        },
        //doctors
        loadDoctors({ commit }) {
            axios
                .get(`/api/doctor/get?lang=${lang}`)
                .then((res) => {
                    console.warn('Doctors :', res.data.doctor.data);
                    let Doctors = res.data.doctor.data;
                    commit('SET_Doctors', Doctors);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadMedicalDevice({ commit }) {
            axios
                .get(`/api/MedicalDevice/get?lang=${lang}`)
                .then((res) => {
                    console.warn('MedicalDevice :', res.data);
                    let MedicalDevice = res.data.MedicalDevice.data;
                    commit('SET_MedicalDevice', MedicalDevice);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadHospitals({ commit }) {
            axios
                .get(`/api/Hospital/get?lang=${lang}`)
                .then((res) => {
                    console.warn('Hospitals :', res.data.Hospital.data);
                    let Hospitals = res.data.Hospital.data;
                    commit('SET_Hospitals', Hospitals);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadSpecialty({ commit }) {
            axios
                .get(`/api/Specialty/get?lang=${lang}`)
                .then((res) => {
                    console.warn('Specialty :', res.data);
                    let Specialty = res.data.Specialty.data;
                    commit('SET_Specialty', Specialty);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadDoctor({ commit }, DoctorId) {
            axios
                .get(`/api/doctor/getById/${DoctorId}?lang=${lang}`)
                .then((res) => {
                    console.warn('DoctorById :', res);
                    let doctor = res;
                    commit('SET_Doctor', doctor);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        //auth
        async signIn({ dispatch }, Credentials) {
            let res = await axios.post(
                'http://edalili.e-dalely.com/public/api/auth/login',
                Credentials
            );
            console.log(res.data);
            return dispatch('attempt', res.data.access_token);
        },
        async attempt({ commit, state }, token) {
            if (token) {
                commit('SET_TOKEN', token);
            }
            console.log(token);
            if (!state.token) {
                return;
            }
            // try {
            // let res = await axios.get('auth/me');
            //   let res = await axios.get("auth/me", {
            //     headers: {
            //       Authorization: "Bearer" + token,
            //     },});
            //     commit('SET_USER', res.data);
            // } catch (e) {
            //     commit('SET_TOKEN', null);
            //     commit('SET_USER', null);
            // }
        },
        signOut({ commit }) {
            const token = localStorage.getItem('token');
            return axios.post(`api/auth/logout?${token}`).then(() => {
                commit('SET_TOKEN', null);
                commit('SET_USER', null);
            });
        },
        //Register
        async register({ dispatch }, Credentials) {
            let res = await axios.post(
                'http://edalili.e-dalely.com/public/api/auth/register',
                Credentials
            );
            console.log(res.data);
            return dispatch('attempt1', res.data.access_token);
        },
        async attempt1({ commit }, token) {
            console.log(token);
            commit('SET_TOKEN1', token);
            // try {
            //   let res = await axios.get("auth/me", {
            //     headers: {
            //       Authorization: "Bearer" + token,
            //     },
            //   });
            //   commit("SET_USER", res.data);
            // } catch (e) {
            //   commit("SET_TOKEN", null);
            //   commit("SET_USER", null);
            // }
        },
    },
    getters: {
        avalibleStore: (state) => {
            let len = state.Product[0].store.length;
            return len - 1;
        },
        getStoreId: (state) => (id) => {
            return state.Stores.find((prod) => prod.id === id);
        },
        //auth
        authenticated(state) {
            return state.token;
            // return state.token && state.user;
        },
        user(state) {
            return state.user;
        },
    },
});

export default store;
