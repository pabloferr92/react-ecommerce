import type { NextPage } from "next";
import { HomeComponent } from "../components/HomeComponent";
import { MenuCategory } from "../components/MenuCategory";
import NavMenu from "../components/NavMenu/NavMenu";
import StorageService from "../services/StorageService";
import { DefaultPage } from "./../components/NavMenu/DefaultPage/DefaultPage";

const Home: NextPage = () => {
  const storageService = new StorageService();

  storageService.listAll();

  return (
    <>
      <DefaultPage title="teste">
        <MenuCategory></MenuCategory>
        <HomeComponent></HomeComponent>
      </DefaultPage>
    </>
  );
};

export default Home;
