import React from "react";
import HeroBanner from "../Components/HeroBanner";
import ZmsFooter from "../Components/ZmsFooter";
import { Flex, Image, Slider } from "@chakra-ui/react";
import Image1 from "../Assets/ImgImg.png";
import ContactForm from "../Components/ContactForm";
import RecordComponent from "../Components/RecordComponent";
import Partner from "../Components/Partner";
import ProductOffering from "../Components/ProductOffering";



const Zms = () => {
  return (
    <div>
      <HeroBanner />
      <ProductOffering/>
      <Partner />

      <Flex
        width={{ base: "90%", lg: "80%" }}
        height="500px"
        margin="auto"
        marginTop='150px'
      
      >
        <Image width="100%" height="100%" src={Image1} alt="demo" />
      </Flex>


      <RecordComponent />

      <ContactForm  />

      <ZmsFooter />
    </div>
  );
};

export default Zms;
