import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function MovieCard({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://placeholder.com/300x400`,
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-white text-sm mt-2" numberOfLines={1}>
          {title}
        </Text>
        <View className="flex-row items-center gap-1 mt-2">
          <Image source={icons.star} className="w-4 h-4" />
          <Text className="text-white text-sm">
            {Math.round(vote_average * 10) / 10}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
