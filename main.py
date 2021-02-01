while True:
    print (input.acceleration(Dimension.X))
    if input.acceleration(Dimension.X) <1 or input.acceleration(Dimension.X) >1:
        light.set_all(light.rgb(200, 165, 155))
    else:
        light.clear()