import { FlatList, SafeAreaView, Text, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { err } from "react-native-svg";

type Details = {
  id: string;
  name: string;
  origin: string;
  description: string;
};

type Image = {
  id: string;
  url: string;
};

export const DetailScreen = ({ route }: any) => {
  const [details, setDetails] = useState<Details[]>([]);
  const [image, setImage] = useState<Image[]>([]);

  const getDetails = async () => {
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/breeds/${route.params.id}`
      );
      const json = await response.json();
      setDetails(json);
    } catch (error) {
      console.error(error);
    }
  };

  const getImage = async () => {
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/${route.params.reference_image_id}`
      );
      const json = await response.json();
      setImage(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDetails();
    getImage();
  }, []);
  return (
    <View>
      <Text>
        {route.params.id}
        {route.params.reference_image_id}
      </Text>
    </View>
  );
};
