import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

import { useSelector, useDispatch } from "react-redux"
import { decrementActionDispatch, fetchProductsAsync, incrementActionDispatch } from '../redux/action'

const HomePage = () => {

    const count = useSelector(state => state.countReducer.count)
    const products = useSelector(state => {
        return state.productsReducer.products;
    })

    const dispatch = useDispatch();

    const Button = ({ title, onPress }) => {
        return (
            <TouchableOpacity
                onPress={onPress}
                style={{ margin: 16, backgroundColor: "plum", padding: 10 }}>
                <Text style={{ fontSize: 32 }}>{title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1, padding: 20, alignItems: "center" }}>
            <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 80 }} >{count}</Text>

                <View style={{ flexDirection: "row" }}>
                    <Button title="Increment" onPress={() => dispatch(incrementActionDispatch(5))} />
                    <Button title="Decrement" onPress={() => dispatch(decrementActionDispatch(3))} />
                </View>

                <Button title="Fetch Products" onPress={() => dispatch(fetchProductsAsync())} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    (products.length > 0) ? products.map(product => {
                        const img = product.images[0];
                        return (
                            <View
                                key={product.id}
                                style={{ marginBottom: 20, flexDirection: "column" }}>
                                <View style={{ flexDirection: "row", marginVertical: 20 }}>
                                    <Text style={{ fontSize: 20 }}>{product.title}</Text>
                                    <Text
                                        style={{ fontSize: 20, fontWeight: "bold", marginHorizontal: 20 }}
                                    >{product.price}</Text>
                                </View>

                                <Image
                                    progressiveRenderingEnabled={true}
                                    source={{ uri: img }}
                                    height={500}
                                    width={500}
                                    style={{ width: 500, height: 500 }}
                                />
                            </View>
                        )
                    })
                        :
                        <Text> NO Products available</Text>
                }
            </ScrollView>

        </View>
    )
}

export default HomePage;

