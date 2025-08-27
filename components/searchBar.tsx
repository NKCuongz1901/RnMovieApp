import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface SearchBarProps {
  onPress: () => void;
  placeholder: string;
}

const SearchBar = (props: SearchBarProps) => {
    const {onPress, placeholder} = props;
  return (
    <View className='flex-row items-center justify-center bg-dark-200 rounded-full px-5 py-4'>
        <Image source={icons.search} resizeMode='contain' tintColor='#ab8bff' className='size-5'/>
        <TextInput
        onPress={onPress}
        onChangeText={() => {}}
        value={''}
        placeholder={placeholder}
        className='flex-1 text-white text-base font-medium ml-2'
        placeholderTextColor='#A8B5DB'/>
    </View>
  )
}

export default SearchBar