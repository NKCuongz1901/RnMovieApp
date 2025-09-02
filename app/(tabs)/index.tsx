import MovieCard from "@/components/movieCard";
import SearchBar from "@/components/searchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchPopularMovie } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";

import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchPopularMovie({ query: "" }));

  console.log("Check movvies data =====", movies);

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        {moviesLoading ? (
          <ActivityIndicator size={"large"} color={"#fff"} />
        ) : (
          <View className="flex-1 mt-10">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for a movie"
            />
            <Text className="text-white text-2xl font-bold mt-5">
              Latest Movies
            </Text>
            <FlatList
              data={movies}
              renderItem={({ item }) => <MovieCard {...item} />}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              numColumns={3}
              columnWrapperStyle={{
                gap: 20,
                justifyContent: "flex-start",
                paddingRight: 5,
                marginBottom: 20,
              }}
              className="mt-5 pb-32"
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}
