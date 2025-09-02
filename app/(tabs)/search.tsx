import MovieCard from "@/components/movieCard";
import SearchBar from "@/components/searchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchPopularMovie } from "@/services/api";
import useFetch from "@/services/useFetch";
import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: refetchSearch,
    reset: resetSearch,
  } = useFetch(() => fetchPopularMovie({ query: searchQuery }), false);

  useEffect(() => {
    const debouncedFetchSearch = setTimeout(async () => {
      if (searchQuery.trim()) {
        await refetchSearch();
      } else {
        resetSearch();
      }
    }, 500);

    return () => clearTimeout(debouncedFetchSearch);
  }, [searchQuery]);
  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-1 absolute w-full z-0 "
        resizeMode="cover"
      />
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 20,
          marginVertical: 20,
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        className="px-5"
        ListHeaderComponent={
          <>
            <View className="flex-row w-full justify-center mt-20">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>
            <View className="my-5">
              <SearchBar
                placeholder="Search for a movie"
                onChangeText={setSearchQuery}
                searchQuery={searchQuery}
              />
            </View>
            {!moviesLoading &&
              !moviesError &&
              searchQuery.trim() &&
              movies?.length > 0 && (
                <Text className="text-white text-2xl font-bold mt-5">
                  Search result for {searchQuery}
                </Text>
              )}
          </>
        }
        ListEmptyComponent={
          !moviesLoading && !moviesError ? (
            <Text className="text-center text-gray-500">
              {searchQuery.trim() ? "No results found" : "Search for a movie"}
            </Text>
          ) : null
        }
      />
    </View>
  );
};

export default Search;
