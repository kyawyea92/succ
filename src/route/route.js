import { BrowserRouter, Route, Routes } from "react-router-dom";
import TitleBar from '../title/titleBar';
import Footer from '../footer/footer';
import ItemsList from '../item/itemslist';
import ProductDetailForm from '../productInfo/productDetailForm';
import Shop from "../shop/shop";
import NewShop from "../shop/newshop";
import ShopItemsList from "../shop/shopitemslist";
import ShopProductDetailForm from "../shop/shopproductDetailForm";
import NewItem from "../item/newitem";
import Login from "../login";
import SignUp from "../singup";
import ForgetPassword from "../forgetpassword";
import MyProfile from "../title/myprofile";
import MyCart from '../title/myCart';
function SuccRoute() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/forget-password" element={<ForgetPassword />} />
                </Routes>
                <TitleBar />
                <Routes>
                    <Route path="/" element={<ItemsList />} />
                    <Route path="/details/:id" element={<ProductDetailForm />} />
                    <Route path="/create-shop" element={<Shop />} />
                    <Route path="/new-shop" element={<NewShop />} />
                    <Route path="/create-shop/shop-posts" element={<ShopItemsList />} />
                    <Route path="/shop/details/:id" element={<ShopProductDetailForm />} />
                    <Route path="/create/newitem" element={<NewItem />} />
                    <Route path="/my-cart" element={<MyCart />} />
                    <Route path="/my-profile" element={<MyProfile />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default SuccRoute;