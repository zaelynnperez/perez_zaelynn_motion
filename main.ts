while (true) {
    console.log(input.acceleration(Dimension.X))
    if (input.acceleration(Dimension.X) < 1) {
        light.setAll(light.rgb(255, 165, 150))
    } else {
        light.clear()
    }
    
}
