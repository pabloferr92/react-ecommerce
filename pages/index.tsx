import type { NextPage } from "next";
import { DefaultPage } from "../components/DefaultPage/DefaultPage";
import { HomeComponent } from "../components/HomeComponent";
import { MenuCategory } from "../components/MenuCategory";
import NavMenu from "../components/NavMenu/NavMenu";
import StorageService from "../services/StorageService";

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
