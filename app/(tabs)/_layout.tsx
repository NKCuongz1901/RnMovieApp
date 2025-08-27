import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

export default function _Layout() {

  const TabIcon = ({focused, icon, text}: any) => {
    if(focused){
      return (
        <>
        <ImageBackground 
        source={images.highlight} 
        className='flex flex-row flex-1 w-full min-w-[112px] min-h-16 mt-4 items-center justify-center rounded-full overflow-hidden'>
          <Image source={icon} tintColor='#151312' className='size-5'/>
          <Text className='text-secondary text-base font-semibold ml-2'>{text}</Text>
        </ImageBackground>
      </>
      )

    }
    return (
      <View className='size-full mt-4 justify-center items-center rounded-full'>
        <Image source={icon} tintColor='#A8B5DB' className='size-5'/>
      </View>
    )
    
  }
  return (
    <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      tabBarItemStyle:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      tabBarStyle:{
        backgroundColor: '#0f0D23',
        borderRadius: 50,
        marginHorizontal: 10,
        marginBottom: 36,
        height: 52,
        borderWidth: 1,
        borderColor: '#0f0D23',
        overflow: 'hidden',
        position: 'absolute',


      }
    }}
    >
        <Tabs.Screen 
          name="index" 
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <TabIcon
                focused={focused}
                icon={icons.home}
                text='Home'
              />
            )
          }} />
        <Tabs.Screen 
          name="search" 
          options={{
            headerShown: false, 
            title: 'Search',
            tabBarIcon: ({focused}) => (
              <TabIcon
                focused={focused}
                icon={icons.search}
                text='Search'
              />
            )
          }} 
          />
        <Tabs.Screen 
          name="saved" 
          options={{
            headerShown: false, 
            title: 'Saved',
            tabBarIcon: ({focused}) => (
              <TabIcon
                focused={focused}
                icon={icons.save}
                text='Saved'
              />
            )
          }} 
          />
        <Tabs.Screen 
          name="profile" 
          options={{
            headerShown: false, title: 'Profile',
            tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              icon={icons.person}
              text='Profile'
            />
          )
        }} 
        />
    </Tabs>
  )
}