import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { FlatList, SafeAreaView, Text, View, Button } from "react-native";

type Data = {
  id: string;
  name: string;
  origin: string;
  description: string;
  reference_image_id: string;
};

type ItemProps = { name: string };

const Item = ({ item }: any) => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ margin: 5 }}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}></Text>
          <Button
            title={item.name}
            onPress={() => {
              navigate("Detail", {
                id: item.id,
                reference_image_id: item.reference_image_id,
              });
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export const HomeScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Data[]>([]);

  const getDogs = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/breeds?limit=20"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDogs();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
