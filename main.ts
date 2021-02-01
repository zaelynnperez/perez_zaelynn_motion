while (true) {
    console.log(input.acceleration(Dimension.X))
    if (input.acceleration(Dimension.X) < 1 || input.acceleration(Dimension.X) > 1) {
        light.setAll(light.rgb(200, 165, 155))
    } else {
        light.clear()
    }
    
}
