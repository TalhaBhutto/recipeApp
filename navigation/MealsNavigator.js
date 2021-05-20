import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetails from '../screens/MealDetails'

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals:{
        screen:CategoryMealsScreen,

    },
    MealDetail:MealDetails,
});

export default createAppContainer(MealsNavigator);