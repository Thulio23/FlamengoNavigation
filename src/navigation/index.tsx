import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuTabs } from "./MenuBottomTab.navigation"


export default function Navigation() {
    return (
        <NavigationContainer>
            <MenuTabs />
        </NavigationContainer>
    );
}