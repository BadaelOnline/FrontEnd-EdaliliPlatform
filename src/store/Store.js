import { createStore } from 'vuex';
import axios from 'axios';
import jeson from '@/jeson/MOCK_DATA.json';
import data from '@/jeson/data';
import SectionData from '@/jeson/SectionData';
import StoriesData from '@/jeson/StoriesData';
let cartItems = window.localStorage.getItem('cartItems');
let cartItemCount = window.localStorage.getItem('cartItemCount');
let lang = window.localStorage.getItem('lang');
let page_brand = window.localStorage.getItem('page_brand') || 1;
let page_Category = window.localStorage.getItem('page_Category') || 1;
const store = createStore({
    state: {
        // APi
        Brands: [],
        page_Brands: null,
        page_Categories: null,
        Stores: [],
        store: [],
        // ____________ start activities ____________
        activities: [],
        activityId: [],
        plans: [],
        plansId: [],
        Trait: [],
        currencies:[],
        attachment:[],
        payments:[],
        // ____________ end activities ____________
        Sections: [],
        Product: [],
        ProductID: [],
        productById: [],
        Categories: [],
        CategoryID: null,
        priceArray: [],
        Restaurants: [],
        ResCategories: [],
        RestaurantProducts: [],
        RestaurantID: null,
        Doctors: [],
        MedicalDevice: [],
        Hospitals: [],
        Specialty: [],
        doctor: null,
        ////////////////
        Section: SectionData.Section,
        Stories: StoriesData.stores,
        //////////
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
        SET_activities(state, activities) {
            state.activities = activities;
        },
        SET_activityId(state, activityId) {
            state.activityId = activityId;
        },        
        SET_plans(state, plans) {
            state.plans = plans;
        },
        SET_plansId(state, plansId) {
            state.plansId = plansId;
        },
        SET_Trait(state, Trait) {
            state.Trait = Trait;
        },
        SET_currencies(state, currencies) {
            state.currencies = currencies;
        },
        SET_attachment(state, attachment) {
            state.attachment = attachment;
        },
        SET_payments(state, payments) {
            state.payments = payments;
        },
        SET_Products(state, Product) {
            state.Product = Product;
        },
        SET_ProductID(state, ProductID) {
            state.ProductID = ProductID;
        },
        SET_Sections(state, Sections) {
            state.Sections = Sections;
        },
         SET_Brands(state, Brands) {
             state.Brands = Brands;
         },
         SET_page_Brands(state, page_Brands) {
            state.page_Brands = page_Brands;
        },
        SET_page_Categories(state, page_Categories) {
            state.page_Categories = page_Categories;
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
        // restaurant
        SET_Restaurants(state, Restaurants) {
            state.Restaurants = Restaurants;
        },
        SET_RestaurantID(state, RestaurantID) {
            state.RestaurantID = RestaurantID;
        },
        SET_ResCategories(state, ResCategories) {
            state.ResCategories = ResCategories;
        },
        SET_RestaurantProducts(state, RestaurantProducts) {
            state.RestaurantProducts = RestaurantProducts;
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
        loadactivities({ commit }) {
            axios
                .get(`api/activity_type/activity`)
                .then((res) => {
                    // console.log('activities :', res.data);
                    let activities = res.data;
                    commit('SET_activities', activities);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadactivityId({ commit }, Id) {
            axios
                .get(`api/activity_type/get-by-activity/${Id}`)
                .then((res) => {
                    // console.log('activityId :', res.data.activity_Type);
                    let activityId = res.data.activity_Type;
                    commit('SET_activityId', activityId);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadPlans({ commit }) {
            axios
                .get(`/api/plans/get`)
                .then((res) => {
                    // console.log('plans :', res.data.plan);
                    let plans = res.data.plan;
                    commit('SET_plans', plans);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadPlansId({ commit }, Id) {
            axios
                .get(`/api/plans/get-by-activity/${Id}`)
                .then((res) => {
                    // console.log('plansId :', res.data.plan);
                    let plansId = res.data.plan;
                    commit('SET_plansId', plansId);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadTraitStore({ commit }) {
            axios
                .get(`/api/sections/get`)
                .then((res) => {
                    // console.log('Trait :', res.data.Section);
                    let Trait = res.data.Section;
                    commit('SET_Trait', Trait);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadcurrencies({ commit }) {
            axios
                .get(`/api/currencies/get`)
                .then((res) => {
                    // console.log('currencies :', res.data.Currency);
                    let currencies = res.data.Currency;
                    commit('SET_currencies', currencies);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadattachmentId({ commit }, Id) {
            axios
                .get(`api/attachments/get-by-activity/${Id}`)
                .then((res) => {
                    // console.log('attachment :', res.data.attachment);
                    let attachment = res.data.attachment;
                    commit('SET_attachment', attachment);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loapayments({ commit }) {
            axios
                .get(`/api/payments/get`)
                .then((res) => {
                    // console.log('payments :', res.data.payments);
                    let payments = res.data.payments;
                    commit('SET_payments', payments);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadStores({ commit }) {
            axios
                .get(`/api/stores/getAll?lang=${lang}`)
                .then((res) => {
                    console.log('Stores :', res.data.Stores);
                    let Stores = res.data.Stores;
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
                    console.log('StorebyId :', res);
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
                    console.log('Product :', res.data.Products.data);
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
                    console.log('ProductID :', res.data.product);
                    let ProductID = res.data.product;
                    commit('SET_ProductID', ProductID);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadSections({ commit }) {
            axios
                .get(`/api/sections/getAll?lang=${lang}`)
                .then((res) => {
                    console.log('Sections:', res.data.Section);
                    let Sections = res.data.Section;
                    commit('SET_Sections', Sections);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        async  loadBrands({ commit }) {
          await   axios
                 .get(`/api/brands/getAll?page=${page_brand}&lang=${lang}`)
                 .then((res) => {
                     console.log('Brands :', res.data.Brand.data);
                     let Brands = res.data.Brand.data;
                     let page_Brands = res.data.Brand.last_page;
                     commit('SET_Brands', Brands);
                     commit('SET_page_Brands', page_Brands);
                 })
                 .catch(function (error) {
                     console.log('Error: ', error);
                 });
         },
        loadCategories({ commit }) {
            axios
                .get(`/api/categories/getAll?page=${page_Category}&lang=${lang}`)
                .then((res) => {
                    console.log('Categories :', res.data.Category.data);
                    let Categories = res.data.Category.data;
                    let page_Categories = res.data.Category.last_page;
                    commit('SET_Categories', Categories);
                    commit('SET_page_Categories', page_Categories);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        loadCategory({ commit }, CategoryID) {
            axios
                .get(`/api/categories/getById/${CategoryID}?lang=${lang}`)
                .then((res) => {
                    console.log('CategoryID :', res.data.Category);
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
        // restaurant
        loadRestaurants({ commit }) {
            axios
                .get(`/api/restaurants?lang=${lang}`)
                .then((res) => {
                    console.log('Restaurants :', res.data.restaurant.data);
                    console.log(res.status);
                    let Restaurants = res.data.restaurant.data;
                    commit('SET_Restaurants', Restaurants);
                })
                .catch(function (error) {
                    console.log('Error: Restaurant not available.', error);
                    if (error.res) {
                        console.log(error.res.status);
                    }
                });
        },
        loadRestaurant({ commit }, RestaurantID) {
            axios
                .get(`/api/restaurant/${RestaurantID}?lang=${lang}`)
                .then((res) => {
                    console.log('RestaurantID :', res.data.Restaurant);
                    console.log(res.status);
                    let RestaurantID = res.data.Restaurant;
                    commit('SET_RestaurantID', RestaurantID);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                    if (error.res) {
                        console.log(error.res.status);
                    }
                });
        },
        loadResCategories({ commit }) {
            axios
                .get(`/api/restaurantcategories?lang=${lang}`)
                .then((res) => {
                    console.log('ResCategories :', res);
                    console.log(res.status);
                    let ResCategories = res;
                    commit('SET_ResCategories', ResCategories);
                })
                .catch(function (error) {
                    console.log('Error: ResCategories not available.', error);
                    if (error.res) {
                        console.log(error.res.status);
                    }
                });
        },
        loadRestaurantProducts({ commit }) {
            axios
                .get(`/api/restaurantproducts?lang=${lang}`)
                .then((res) => {
                    console.log('RestaurantProducts :', res);
                    console.log(res.status);
                    let RestaurantProducts = res;
                    commit('SET_RestaurantProducts', RestaurantProducts);
                })
                .catch(function (error) {
                    console.log(
                        'Error: RestaurantProducts not available.',
                        error
                    );
                    if (error.res) {
                        console.log(error.res.status);
                    }
                });
        },
        //doctors
        loadDoctors({ commit }) {
            axios
                .get(`/api/doctor/get?lang=${lang}`)
                .then((res) => {
                    console.log('Doctors :', res.data.doctor.data);
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
                    console.log('MedicalDevice :', res.data);
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
                    console.log('Hospitals :', res.data.Hospital.data);
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
                    console.log('Specialty :', res.data);
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
                    console.log('DoctorById :', res);
                    let doctor = res;
                    commit('SET_Doctor', doctor);
                })
                .catch(function (error) {
                    console.log('Error: ', error);
                });
        },
        //auth 
        //  __________ signOut _______
        signOut({ commit }) {
            const token = localStorage.getItem('token');
            return axios.post(`api/auth/logout?${token}`).then(() => {
                commit('SET_TOKEN', null);
                commit('SET_USER', null);
            });
        },
        //__________ signIn _______
        async  signIn({ dispatch }, Credentials) {
            await axios
                .post(
                    '/api/auth/login',
                    Credentials
                )
                .then((res) => {
                    console.log('login_In :', res.data);
                    dispatch('attempt', res.data.user["1"]);
                })
                .catch(function (error) {
                    console.log('login_In: ',error);
                });
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
        //__________ Register _______
        async  register({ dispatch }, Credentials) {
            const headers = {
                'Content-Type': 'application/json',
              }
            await axios
            .post(
                'api/auth/register',
                Credentials,
                {headers: headers}
            )
                .then((res) => {
                    console.log('res_rigster :', res.data);
                    dispatch('attempt', res.data.access_token);
                })
                .catch(function (error) {
                    console.log('Error_res_rigster: ',error);
                });
        },
        async attemp({ commit  }, token) {
            if (token) {
                commit('SET_TOKEN', token);
            }
            console.log(token);
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
