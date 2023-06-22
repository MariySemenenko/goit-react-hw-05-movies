//  Header


import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {  NavLink } from "react-router-dom";

export const SharedLayout = () => {

    return (

        <div>

<header>
    <nav>
<NavLink to='/'>Home</NavLink>
<NavLink to='/movies' >Movies</NavLink>
    </nav>
</header>
<Suspense fallback={<Loader />}>
    <Outlet />
</Suspense>

        </div>
    )
}

//Далі використовуємо цей компонент у <App> так щоб він рендерився на будь-який маршрут.
// Для цього будемо рендерувати його на /, а всі інші маршрути робимо вкладеними в нього,
// тому змінимо path всіх вкладених маршрутів відносно батьківського.