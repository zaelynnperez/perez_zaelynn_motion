while True:
    print (input.acceleration(Dimension.X))
    if input.acceleration(Dimension.X) <1:
        light.set_all(light.rgb(255,165,150))
    else:
        light.clear()