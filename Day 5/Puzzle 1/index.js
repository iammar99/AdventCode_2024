let array = [
    [18, 46, 96, 13, 27, 49, 35, 28, 75, 12, 25, 81, 24, 16, 39, 34, 67],
    [75, 58, 64, 12, 65, 48, 42, 45, 61, 29, 78, 73, 66, 98, 55, 83, 87, 51, 53, 11, 59, 33, 94],
    [27, 18, 64, 12, 65, 61, 73, 98, 19, 87, 53],
    [98, 71, 47, 28, 33, 37, 25, 34, 87, 66, 11, 53, 52, 79, 83, 19, 51, 16, 59],
    [98, 19, 83, 51, 53, 89, 52, 37, 67],
    [15, 85, 39, 46, 27, 96, 18, 75, 58, 64, 12, 45, 61, 29, 78, 66, 55],
    [53, 12, 78, 58, 66, 87, 83, 96, 73, 45, 64, 11, 48],
    [12, 78, 58, 65, 87, 73, 51, 66, 55, 94, 48, 19, 45],
    [33, 94, 71, 89, 52, 37, 35, 28, 16, 25, 81, 67, 26, 24, 13, 15, 49, 85, 39, 46, 27],
    [61, 46, 42, 64, 85, 29, 15, 12, 48, 24, 65, 58, 26, 13, 75, 18, 73],
    [52, 34, 19, 11, 87, 28, 53, 47, 55, 51, 33, 66, 98, 89, 81],
    [78, 48, 58, 64, 75, 66, 19, 12, 61],
    [66, 98, 55, 19, 83, 87, 51, 53, 11, 59, 33, 94, 71, 79, 89, 52, 37, 28, 16, 25, 34, 81, 47],
    [59, 33, 94, 71, 79, 89, 35, 28, 16, 25, 34, 81, 47, 67, 26, 24, 13, 15, 49, 85, 46],
    [18, 75, 58, 64, 48, 42, 45, 78, 73, 55, 83, 87, 53, 59, 33],
    [47, 67, 26, 24, 15, 49, 85, 39, 46, 27, 96, 32, 18, 75, 58, 64, 12, 65, 48, 42, 45, 61, 29],
    [26, 75, 27, 96, 15, 28, 64, 18, 49, 39, 13, 47, 58, 16, 46, 37, 32, 34, 67, 24, 81],
    [15, 49, 39, 46, 96, 32, 18, 75, 65, 48, 42, 61, 29, 78, 73, 98, 55],
    [25, 13, 49, 46, 27, 96, 32, 18, 58],
    [25, 34, 39, 46, 18, 58, 42],
    [79, 25, 83, 59, 55, 71, 81, 53, 11, 98, 66],
    [55, 19, 83, 79, 52],
    [28, 81, 67, 26, 85, 46, 27, 96, 32, 18, 75, 58, 12],
    [34, 81, 47, 26, 24, 13, 15, 39, 27, 18, 58, 12, 65, 48, 45],
    [75, 58, 48, 42, 29, 78, 66, 55, 83, 87, 94],
    [39, 46, 65, 73, 98, 19, 87],
    [16, 34, 19, 78, 33, 71, 87, 37, 25, 53, 89, 83, 59, 35, 94, 11, 51],
    [67, 46, 96, 39, 34, 32, 35, 47, 89, 52, 18, 37, 15, 85, 79],
    [83, 11, 59, 33, 37, 47, 13],
    [28, 16, 25, 34, 81, 47, 67, 26, 24, 13, 15, 49, 85, 46, 27, 96, 32, 18, 75, 58, 64, 12, 65],
    [71, 55, 11, 87, 16, 28, 94, 89, 73, 79, 83, 35, 34, 19, 51, 25, 66, 78, 37, 98, 59],
    [35, 28, 16, 25, 34, 81, 47, 67, 26, 24, 13, 49, 85, 39, 46, 27, 96, 32, 18, 75, 58, 64, 12],
    [35, 37, 87, 79, 73, 71, 52, 51, 11, 19, 25, 16, 33, 98, 29, 59, 78, 66, 83, 94, 89, 53, 55],
    [87, 34, 81, 51, 37, 11, 59, 89, 26, 19, 47, 94, 79, 52, 33, 25, 55, 53, 35],
    [94, 71, 87, 15, 35, 89, 13, 34, 24],
    [33, 71, 89, 52, 37, 28, 16, 25, 81, 47, 67, 49, 85, 39, 27],
    [52, 37, 35, 28, 16, 25, 34, 81, 47, 67, 26, 24, 15, 39, 46, 27, 32, 75, 58],
    [64, 65, 48, 42, 45, 61, 29, 78, 73, 66, 98, 55, 19, 51, 53, 11, 59, 33, 94, 71, 79],
    [83, 64, 73, 61, 46, 48, 98, 29, 19, 39, 87, 58, 55, 75, 96],
    [87, 42, 12, 29, 65, 59, 89, 83, 79],
    [96, 32, 64, 12, 48, 61, 29, 78, 73, 66, 98, 51, 11],
    [73, 55, 19, 83, 87, 59, 33, 71, 89, 52, 37, 28, 25, 34, 81],
    [15, 49, 39, 27, 96, 18, 75, 58, 64, 12, 65, 48, 42, 78, 66, 98, 55],
    [85, 18, 29, 65, 75, 45, 73, 61, 58, 13, 12, 96, 27, 26, 24],
    [45, 29, 78, 73, 66, 98, 55, 19, 83, 87, 51, 53, 11, 59, 33, 94, 71, 79, 89, 52, 37, 35, 28],
    [34, 47, 67, 26, 24, 13, 39, 32, 18, 58, 64, 48, 45],
    [46, 12, 32, 39, 58, 13, 67, 96, 75, 15, 48],
    [13, 15, 85, 46, 96, 18, 75, 58, 64, 12, 45, 29, 73, 66, 98],
    [11, 94, 71, 79, 37, 28, 16, 25, 34, 81, 47, 67, 49, 85, 39],
    [34, 47, 33, 28, 39, 13, 89, 16, 27, 49, 52, 37, 15, 67, 25, 81, 35, 71, 24, 94, 85, 26, 46],
    [35, 28, 34, 81, 47, 26, 24, 13, 49, 39, 46, 27, 96, 32, 18, 75, 58, 64, 12],
    [51, 53, 11, 59, 94, 89, 52, 37, 16, 25, 67, 15, 49],
    [29, 28, 19, 61, 37, 52, 35, 98, 45, 78, 87],
    [28, 32, 79, 15, 37, 39, 96, 35, 47, 34, 25, 49, 27, 46, 18, 89, 85],
    [96, 58, 48, 42, 61, 29, 98, 55, 83, 53, 11],
    [85, 39, 32, 12, 42, 55, 83],
    [51, 83, 42, 27, 73],
    [47, 24, 15, 49, 85, 39, 46, 58, 64, 48, 42, 61, 29],
    [13, 61, 65, 81, 39, 67, 18, 32, 45, 96, 24, 46, 49],
    [16, 25, 34, 47, 67, 26, 24, 13, 15, 49, 39, 27, 96, 32, 18, 75, 58, 64, 12, 65, 48],
    [29, 53, 45, 98, 65, 83, 51, 55, 48, 78, 19],
    [33, 94, 79, 52, 35, 28, 16, 25, 34, 47, 67, 26, 13, 49, 39, 46, 27],
    [85, 27, 34, 67, 16, 81, 75, 49, 65, 39, 96],
    [79, 15, 26, 46, 34, 24, 52, 25, 18],
    [55, 83, 53, 33, 89, 67, 26],
    [11, 94, 98, 79, 89, 78, 37, 55, 45, 59, 42, 33, 29, 61, 52, 73, 71, 19, 53],
    [24, 85, 39, 46, 27, 96, 32, 18, 58, 64, 12, 48, 42, 78, 66],
    [61, 29, 73, 98, 53, 79, 16],
    [25, 34, 81, 47, 67, 26, 24, 13, 49, 85, 46, 27, 96, 75, 58, 64, 42],
    [49, 46, 96, 75, 58, 29, 98, 55, 19],
    [15, 49, 78, 13, 64, 96, 18, 73, 48, 65, 85, 98, 42, 45, 12, 29, 46, 39, 58, 66, 61, 27, 75],
    [34, 81, 47, 15, 46, 27, 96, 18, 58, 65, 45],
    [45, 29, 78, 73, 55, 87, 51, 53, 11, 59, 33, 94, 71, 89, 52, 35, 28],
    [34, 81, 47, 67, 26, 13, 15, 85, 39, 27, 96, 32, 18, 75, 58, 12, 65, 42, 45],
    [52, 28, 81, 24, 85, 46, 96, 75, 58],
    [27, 96, 42, 61, 29, 73, 98, 51, 53],
    [79, 52, 37, 34, 67, 26, 15, 85, 18],
    [61, 49, 32, 64, 13, 18, 42, 27, 85, 15, 75, 39, 96, 65, 73],
    [59, 94, 89, 37, 28, 25, 81, 47, 67, 26, 24, 13, 15],
    [18, 58, 46, 32, 55, 96, 45, 51, 19, 42, 75],
    [42, 65, 39, 29, 64, 12, 85, 48, 15, 75, 96, 49, 58, 78, 45, 73, 55],
    [89, 52, 37, 35, 28, 16, 25, 34, 81, 47, 67, 26, 24, 13, 49, 46, 96, 18, 75],
    [71, 79, 89, 52, 37, 35, 16, 25, 34, 81, 47, 26, 24, 13, 15, 49, 85, 46, 27, 96, 32],
    [55, 71, 48, 78, 98, 73, 83, 19, 66, 94, 87, 45, 89, 79, 12, 61, 33],
    [16, 25, 34, 81, 47, 67, 26, 24, 13, 15, 49, 85, 39, 46, 27, 96, 32, 18, 75, 64, 12, 65, 48],
    [32, 48, 27, 78, 83, 98, 96, 61, 58, 18, 87, 65, 55, 53, 12, 75, 64, 42, 19, 29, 45],
    [61, 29, 78, 73, 66, 98, 55, 83, 87, 51, 53, 11, 59, 33, 94, 52, 28],
    [51, 87, 47, 67, 28, 59, 19, 16, 25, 52, 81, 11, 55, 53, 35, 98, 94, 33, 89, 34, 83],
    [67, 26, 24, 13, 15, 49, 85, 39, 46, 27, 96, 18, 75, 58, 64, 12, 65, 48, 42, 45, 61, 29, 78],
    [58, 64, 65, 48, 45, 61, 29, 78, 73, 66, 98, 55, 19, 83, 51, 53, 11, 59, 33, 94, 71],
    [26, 53, 94, 81, 55, 34, 47, 83, 59, 16, 33, 25, 71, 19, 89],
    [16, 27, 35, 26, 96, 32, 34, 79, 85, 37, 81, 47, 39, 13, 46, 25, 28, 15, 67, 52, 49, 24, 71],
    [33, 48, 45, 12, 83, 53, 66, 42, 11, 87, 79, 19, 64, 71, 98, 29, 61],
    [15, 49, 96, 18, 64, 45, 29],
    [27, 96, 32, 18, 75, 58, 64, 12, 65, 48, 42, 61, 29, 78, 73, 66, 98, 55, 19, 83, 87, 51, 53],
    [89, 28, 16, 81, 47, 26, 24, 49, 85, 27, 96],
    [16, 47, 51, 89, 26, 59, 37, 25, 34, 71, 52, 53, 33, 79, 11, 28, 13, 24, 67, 15, 35, 87, 81],
    [83, 59, 61, 42, 98, 78, 58, 11, 48, 71, 87, 94, 12, 19, 66, 45, 53, 33, 51, 65, 29],
    [26, 24, 13, 49, 85, 39, 46, 27, 32, 18, 75, 58, 64, 65, 45, 61, 29, 78, 73],
    [27, 67, 28, 49, 47, 75, 24, 34, 85, 13, 15, 37, 64, 26, 35, 46, 32],
    [71, 16, 46, 81, 34, 67, 89, 52, 27, 49, 26, 39, 94, 35, 37],
    [81, 47, 67, 26, 24, 13, 15, 49, 85, 39, 46, 27, 96, 32, 18, 75, 58, 64, 12, 65, 48, 42, 61],
    [27, 32, 12, 39, 45, 29, 46, 42, 67, 61, 48, 26, 15, 18, 64, 96, 24, 78, 58, 85, 75],
    [94, 71, 79, 89, 52, 16, 81, 26, 24, 13, 49, 85, 39, 46, 96],
    [89, 35, 28, 16, 25, 34, 81, 47, 67, 26, 24, 13, 15, 49, 85, 39, 46, 27, 96, 18, 75],
    [61, 53, 12, 18, 48, 64, 55, 51, 58, 78, 11, 65, 59, 29, 83, 45, 87, 42, 33],
    [52, 61, 73, 83, 55, 19, 87, 42, 51, 66, 89, 94, 29, 78, 33, 11, 59, 35, 45],
    [65, 48, 42, 61, 29, 78, 55, 19, 83, 87, 51, 53, 11, 59, 33, 71, 79, 89, 52],
    [49, 85, 46, 27, 32, 18, 75, 58, 64, 12, 65, 48, 42, 45, 61, 29, 73],
    [78, 73, 66, 98, 19, 83, 87, 51, 53, 11, 59, 33, 94, 71, 79, 89, 52, 37, 35, 28, 16, 25, 34],
    [87, 61, 19, 94, 59, 78, 89, 53, 83, 52, 11, 45, 55, 28, 35, 51, 79],
    [55, 71, 52, 35, 89, 78, 34, 53, 51],
    [65, 42, 45, 29, 78, 73, 66, 98, 55, 19, 87, 51, 11, 59, 94, 71, 79, 89, 52],
    [15, 26, 27, 75, 52, 25, 67, 37, 32, 47, 46, 89, 24, 34, 13, 81, 35, 85, 16],
    [64, 32, 48, 65, 47, 46, 29, 49, 67],
    [85, 39, 96, 32, 18, 75, 58, 12, 65, 48, 45, 29, 66, 98, 55, 19, 83],
    [73, 98, 55, 59, 52, 35, 28, 25, 81],
    [73, 98, 55, 19, 83, 87, 51, 11, 33, 94, 71, 79, 89, 37, 35, 28, 25, 34, 81],
    [39, 15, 26, 75, 47, 42, 29, 61, 24, 48, 12, 64, 49, 32, 46, 65, 67],
    [59, 79, 89, 52, 37, 28, 16, 34, 67, 26, 24, 15, 49],
    [59, 15, 47, 46, 49, 94, 37],
    [71, 67, 89, 34, 52, 15, 94, 53, 28, 26, 33, 59, 47, 25, 87, 37, 79, 13, 81, 11, 24, 51, 16],
    [96, 75, 58, 64, 29, 78, 66, 98, 87, 51, 11],
    [16, 83, 55, 79, 59, 52, 71, 37, 26, 87, 47, 35, 25],
    [32, 18, 75, 64, 12, 65, 48, 42, 45, 29, 78, 66, 98, 55, 87, 51, 59],
    [37, 25, 67, 26, 13, 15, 85, 39, 58],
    [61, 12, 11, 98, 65, 51, 33, 45, 42, 78, 83, 29, 59, 66, 58, 53, 64, 48, 19, 73, 18],
    [24, 11, 37, 87, 35, 94, 79, 89, 47, 51, 81],
    [39, 16, 35, 67, 28],
    [59, 94, 89, 52, 28, 16, 25, 81, 47, 67, 49, 85, 39],
    [51, 12, 42, 46, 45, 58, 66, 75, 78],
    [47, 34, 28, 37, 32, 49, 71, 15, 81],
    [25, 47, 81, 11, 33, 16, 24, 89, 51],
    [48, 42, 45, 29, 78, 73, 66, 98, 55, 19, 83, 87, 51, 53, 11, 59, 33, 94, 71, 89, 52],
    [37, 28, 15, 49, 27],
    [35, 33, 78, 42, 19, 55, 45],
    [45, 29, 78, 98, 55, 83, 51, 11, 33, 94, 71],
    [12, 42, 73, 83, 53, 11, 89],
    [39, 46, 27, 96, 32, 18, 75, 58, 64, 12, 65, 48, 42, 45, 61, 29, 78, 73, 66, 98, 55, 19, 87],
    [67, 26, 24, 13, 15, 49, 39, 46, 32, 18, 75, 65, 48, 42, 45, 61, 78],
    [25, 71, 33, 15, 52, 28, 94, 37, 27],
    [89, 37, 87, 28, 78, 52, 98, 66, 16, 61, 35],
    [39, 46, 61, 32, 42, 19, 27, 55, 64, 78, 12, 96, 87, 29, 18, 45, 98, 65, 73, 75, 58],
    [66, 98, 55, 51, 53, 33, 94, 71, 79, 52, 37, 35, 28, 25, 34, 81, 47],
    [39, 46, 27, 96, 18, 75, 58, 12, 65, 48, 45, 61, 29, 73, 66, 98, 19, 83, 87],
    [67, 13, 27, 96, 12, 61, 78],
    [47, 96, 75, 65, 48, 61, 29],
    [35, 28, 16, 25, 34, 81, 47, 67, 26, 24, 13, 15, 49, 85, 39, 46, 27, 96, 18, 75, 58, 64, 12],
    [37, 75, 81, 58, 15, 18, 16, 35, 34, 96, 28, 46, 52, 67, 47, 49, 26, 27, 32],
    [46, 67, 89, 49, 75, 96, 52],
    [47, 11, 39, 24, 26, 35, 15, 71, 89, 52, 13, 25, 33],
    [51, 37, 53, 16, 87, 24, 15, 79, 13, 34, 94, 52, 81, 33, 11, 89, 59, 71, 67, 47, 35, 26, 25],
    [83, 51, 53, 11, 33, 94, 35, 28, 25, 34, 81, 24, 13],
    [64, 48, 45, 29, 78, 73, 98, 51, 59, 33, 94],
    [89, 53, 81, 51, 83, 16, 66],
    [19, 51, 87, 78, 64, 61, 12, 96, 55, 45, 73, 65, 98, 58, 46, 66, 83],
    [78, 73, 66, 98, 55, 83, 87, 51, 53, 11, 59, 94, 71, 79, 89, 52, 37, 35, 16, 25, 34],
    [48, 64, 11, 66, 78, 29, 32, 45, 96, 73, 19, 87, 53, 98, 42, 51, 83, 75, 65, 12, 61],
    [67, 78, 49, 32, 64, 65, 13],
    [75, 29, 59, 45, 11, 58, 12, 55, 64, 73, 53, 65, 48, 33, 83, 98, 66, 78, 18, 87, 51, 19, 61],
    [83, 51, 79, 35, 34, 24, 13],
    [87, 78, 51, 53, 61, 33, 48, 42, 83, 19, 12, 66, 75, 58, 55, 65, 73, 98, 94],
    [29, 73, 66, 55, 83, 87, 53, 33, 71, 79, 89, 52, 37, 35, 25],
    [53, 11, 59, 33, 94, 71, 79, 89, 52, 37, 35, 28, 16, 25, 34, 81, 47, 67, 26, 24, 13, 15, 85],
    [96, 67, 89, 79, 71, 39, 24, 26, 81, 94, 13],
    [12, 65, 42, 61, 29, 78, 73, 66, 98, 19, 87, 51, 59, 33, 71, 79, 89],
    [25, 34, 81, 47, 67, 26, 24, 13, 15, 49, 85, 39, 46, 27, 96, 32, 18, 58, 64, 12, 65, 48, 42],
    [96, 32, 18, 58, 12, 48, 61, 19, 83, 87, 51],
    [96, 85, 18, 27, 75, 78, 64, 39, 12, 73, 46, 65, 45, 15, 24, 13, 29, 48, 32, 66, 42, 61, 49],
    [25, 34, 81, 47, 67, 26, 13, 15, 39, 27, 96, 12, 65],
    [46, 65, 73, 32, 19, 42, 45, 48, 98],
    [16, 25, 34, 81, 47, 67, 26, 24, 13, 15, 49, 85, 39, 46, 96, 32, 18, 75, 58, 12, 48],
    [58, 52, 16, 96, 85, 13, 81, 18, 28, 26, 67, 35, 37, 27, 15, 47, 24],
    [26, 24, 49, 75, 64, 42, 61, 29, 78],
    [46, 79, 71, 24, 35, 49, 85, 81, 94, 47, 16, 13, 67, 34, 33, 39, 52, 59, 15, 28, 89, 37, 26],
    [45, 51, 12, 48, 29, 61, 66, 83, 71, 55, 58, 78, 87, 73, 42],
    [75, 48, 61, 73, 98, 55, 59, 58, 66, 19, 18, 78, 83],
    [73, 78, 65, 45, 66, 98, 19, 48, 53, 61, 51, 94, 83, 87, 12, 75, 59, 58, 33, 64, 29],
    [96, 13, 75, 47, 65, 26, 48, 58, 12, 24, 27, 39, 15, 67, 45, 61, 46, 81, 64, 32, 85],
    [25, 81, 47, 27, 96, 18, 75, 58, 42],
    [37, 24, 33, 34, 15, 49, 79, 94, 85, 16, 71, 53, 25],
    [89, 33, 24, 47, 37, 79, 49, 27, 28, 85, 35],
    [64, 45, 42, 81, 65, 47, 12, 58, 24, 27, 49, 18, 75, 26, 13, 96, 46, 34, 48],
    [83, 51, 53, 11, 59, 94, 71, 37, 28, 16, 25, 34, 47, 67, 26, 24, 13],
    [19, 53, 59, 79, 52, 16, 47],
    [27, 65, 19, 48, 75, 78, 45, 12, 18, 87, 42, 83, 53, 66, 55, 98, 64],
    [19, 83, 87, 51, 53, 59, 33, 94, 71, 79, 89, 52, 37, 35, 28, 16, 25, 81, 47, 67, 24],
    [33, 94, 89, 52, 37, 28, 16, 25, 34, 81, 47, 67, 26, 24, 13, 15, 85, 39, 46],
    [15, 85, 39, 96, 32, 75, 58, 64, 65, 48, 42, 45, 66, 98, 55],
    [47, 67, 15, 46, 32, 18, 58, 64, 48, 42, 45, 61, 29],
    [52, 89, 37, 35, 53, 16, 79, 55, 59, 51, 29, 61, 78, 73, 98],
    [73, 61, 24, 42, 64, 66, 18, 15, 29],
    [71, 79, 52, 37, 35, 28, 16, 34, 81, 47, 67, 26, 24, 13, 15, 49, 85, 39, 27, 96, 32],
    [15, 39, 64, 66, 24, 61, 12, 18, 58, 45, 32, 75, 73, 27, 65, 46, 29, 42, 13, 85, 48]
]

let order = [
    [73, 89],
    [78, 59],
    [78, 71],
    [32, 66],
    [32, 12],
    [32, 58],
    [13, 29],
    [13, 46],
    [13, 66],
    [13, 61],
    [66, 25],
    [66, 11],
    [66, 37],
    [66, 71],
    [66, 34],
    [67, 29],
    [67, 58],
    [67, 32],
    [67, 24],
    [67, 85],
    [67, 75],
    [29, 87],
    [29, 25],
    [29, 16],
    [29, 35],
    [29, 11],
    [29, 33],
    [29, 59],
    [11, 46],
    [11, 47],
    [11, 28],
    [11, 52],
    [11, 15],
    [11, 79],
    [11, 49],
    [11, 37],
    [19, 81],
    [19, 11],
    [19, 94],
    [19, 67],
    [19, 89],
    [19, 79],
    [19, 26],
    [19, 13],
    [19, 34],
    [12, 29],
    [12, 87],
    [12, 65],
    [12, 79],
    [12, 55],
    [12, 73],
    [12, 48],
    [12, 53],
    [12, 94],
    [12, 89],
    [48, 53],
    [48, 37],
    [48, 35],
    [48, 61],
    [48, 73],
    [48, 51],
    [48, 87],
    [48, 42],
    [48, 66],
    [48, 89],
    [48, 79],
    [79, 67],
    [79, 18],
    [79, 85],
    [79, 81],
    [79, 13],
    [79, 34],
    [79, 28],
    [79, 89],
    [79, 52],
    [79, 26],
    [79, 75],
    [79, 24],
    [64, 94],
    [64, 87],
    [64, 53],
    [64, 66],
    [64, 29],
    [64, 98],
    [64, 11],
    [64, 83],
    [64, 33],
    [64, 55],
    [64, 78],
    [64, 19],
    [64, 51],
    [52, 49],
    [52, 58],
    [52, 13],
    [52, 18],
    [52, 24],
    [52, 35],
    [52, 85],
    [52, 32],
    [52, 75],
    [52, 15],
    [52, 81],
    [52, 46],
    [52, 37],
    [52, 16],
    [87, 37],
    [87, 24],
    [87, 28],
    [87, 51],
    [87, 79],
    [87, 47],
    [87, 53],
    [87, 25],
    [87, 33],
    [87, 11],
    [87, 81],
    [87, 35],
    [87, 34],
    [87, 13],
    [87, 49],
    [27, 55],
    [27, 51],
    [27, 75],
    [27, 18],
    [27, 64],
    [27, 19],
    [27, 29],
    [27, 58],
    [27, 45],
    [27, 73],
    [27, 83],
    [27, 78],
    [27, 53],
    [27, 32],
    [27, 61],
    [27, 42],
    [35, 27],
    [35, 32],
    [35, 24],
    [35, 39],
    [35, 15],
    [35, 75],
    [35, 85],
    [35, 67],
    [35, 81],
    [35, 58],
    [35, 12],
    [35, 34],
    [35, 25],
    [35, 49],
    [35, 96],
    [35, 16],
    [35, 64],
    [75, 55],
    [75, 53],
    [75, 29],
    [75, 73],
    [75, 65],
    [75, 45],
    [75, 78],
    [75, 58],
    [75, 48],
    [75, 94],
    [75, 61],
    [75, 87],
    [75, 71],
    [75, 59],
    [75, 66],
    [75, 33],
    [75, 83],
    [75, 98],
    [59, 15],
    [59, 52],
    [59, 24],
    [59, 33],
    [59, 67],
    [59, 35],
    [59, 37],
    [59, 79],
    [59, 28],
    [59, 46],
    [59, 47],
    [59, 85],
    [59, 13],
    [59, 16],
    [59, 94],
    [59, 49],
    [59, 81],
    [59, 26],
    [59, 34],
    [53, 59],
    [53, 39],
    [53, 47],
    [53, 85],
    [53, 37],
    [53, 79],
    [53, 71],
    [53, 49],
    [53, 52],
    [53, 16],
    [53, 35],
    [53, 94],
    [53, 81],
    [53, 89],
    [53, 67],
    [53, 24],
    [53, 13],
    [53, 15],
    [53, 34],
    [53, 33],
    [83, 35],
    [83, 15],
    [83, 52],
    [83, 67],
    [83, 11],
    [83, 24],
    [83, 33],
    [83, 81],
    [83, 28],
    [83, 53],
    [83, 26],
    [83, 94],
    [83, 79],
    [83, 47],
    [83, 16],
    [83, 71],
    [83, 89],
    [83, 51],
    [83, 59],
    [83, 13],
    [83, 37],
    [24, 13],
    [24, 61],
    [24, 45],
    [24, 98],
    [24, 78],
    [24, 66],
    [24, 49],
    [24, 46],
    [24, 48],
    [24, 42],
    [24, 32],
    [24, 27],
    [24, 12],
    [24, 85],
    [24, 58],
    [24, 96],
    [24, 15],
    [24, 18],
    [24, 73],
    [24, 65],
    [24, 29],
    [24, 39],
    [39, 45],
    [39, 61],
    [39, 42],
    [39, 96],
    [39, 58],
    [39, 55],
    [39, 19],
    [39, 75],
    [39, 65],
    [39, 73],
    [39, 83],
    [39, 98],
    [39, 51],
    [39, 18],
    [39, 32],
    [39, 66],
    [39, 46],
    [39, 27],
    [39, 87],
    [39, 64],
    [39, 78],
    [39, 12],
    [39, 48],
    [28, 64],
    [28, 67],
    [28, 18],
    [28, 27],
    [28, 16],
    [28, 65],
    [28, 32],
    [28, 49],
    [28, 48],
    [28, 46],
    [28, 58],
    [28, 34],
    [28, 15],
    [28, 85],
    [28, 39],
    [28, 24],
    [28, 26],
    [28, 81],
    [28, 47],
    [28, 75],
    [28, 25],
    [28, 12],
    [28, 13],
    [28, 96],
    [26, 64],
    [26, 18],
    [26, 13],
    [26, 49],
    [26, 15],
    [26, 65],
    [26, 24],
    [26, 78],
    [26, 96],
    [26, 48],
    [26, 75],
    [26, 85],
    [26, 39],
    [26, 12],
    [26, 66],
    [26, 61],
    [26, 27],
    [26, 29],
    [26, 42],
    [26, 45],
    [26, 73],
    [26, 32],
    [26, 46],
    [26, 58],
    [45, 51],
    [45, 79],
    [45, 19],
    [45, 71],
    [45, 52],
    [45, 29],
    [45, 83],
    [45, 37],
    [45, 35],
    [45, 28],
    [45, 87],
    [45, 16],
    [45, 53],
    [45, 78],
    [45, 33],
    [45, 11],
    [45, 66],
    [45, 73],
    [45, 61],
    [45, 89],
    [45, 55],
    [45, 94],
    [45, 59],
    [45, 98],
    [49, 48],
    [49, 98],
    [49, 61],
    [49, 27],
    [49, 29],
    [49, 32],
    [49, 85],
    [49, 18],
    [49, 46],
    [49, 78],
    [49, 55],
    [49, 19],
    [49, 83],
    [49, 96],
    [49, 64],
    [49, 73],
    [49, 12],
    [49, 39],
    [49, 45],
    [49, 66],
    [49, 75],
    [49, 58],
    [49, 42],
    [49, 65],
    [81, 27],
    [81, 15],
    [81, 39],
    [81, 75],
    [81, 58],
    [81, 85],
    [81, 48],
    [81, 46],
    [81, 61],
    [81, 67],
    [81, 13],
    [81, 26],
    [81, 96],
    [81, 18],
    [81, 64],
    [81, 49],
    [81, 12],
    [81, 32],
    [81, 24],
    [81, 29],
    [81, 42],
    [81, 47],
    [81, 45],
    [81, 65],
    [65, 61],
    [65, 59],
    [65, 45],
    [65, 42],
    [65, 11],
    [65, 78],
    [65, 48],
    [65, 33],
    [65, 55],
    [65, 73],
    [65, 94],
    [65, 83],
    [65, 19],
    [65, 89],
    [65, 53],
    [65, 29],
    [65, 37],
    [65, 66],
    [65, 79],
    [65, 52],
    [65, 98],
    [65, 71],
    [65, 51],
    [65, 87],
    [51, 67],
    [51, 85],
    [51, 53],
    [51, 16],
    [51, 47],
    [51, 33],
    [51, 15],
    [51, 35],
    [51, 25],
    [51, 13],
    [51, 52],
    [51, 28],
    [51, 11],
    [51, 94],
    [51, 81],
    [51, 26],
    [51, 37],
    [51, 34],
    [51, 79],
    [51, 59],
    [51, 71],
    [51, 49],
    [51, 89],
    [51, 24],
    [16, 46],
    [16, 13],
    [16, 42],
    [16, 25],
    [16, 85],
    [16, 24],
    [16, 65],
    [16, 12],
    [16, 96],
    [16, 81],
    [16, 75],
    [16, 39],
    [16, 15],
    [16, 32],
    [16, 18],
    [16, 64],
    [16, 27],
    [16, 67],
    [16, 58],
    [16, 34],
    [16, 48],
    [16, 47],
    [16, 26],
    [16, 49],
    [37, 24],
    [37, 18],
    [37, 96],
    [37, 12],
    [37, 47],
    [37, 35],
    [37, 16],
    [37, 32],
    [37, 67],
    [37, 46],
    [37, 81],
    [37, 25],
    [37, 34],
    [37, 28],
    [37, 15],
    [37, 85],
    [37, 39],
    [37, 58],
    [37, 27],
    [37, 26],
    [37, 49],
    [37, 64],
    [37, 75],
    [37, 13],
    [58, 48],
    [58, 66],
    [58, 29],
    [58, 19],
    [58, 73],
    [58, 51],
    [58, 98],
    [58, 61],
    [58, 65],
    [58, 11],
    [58, 33],
    [58, 12],
    [58, 64],
    [58, 53],
    [58, 45],
    [58, 59],
    [58, 94],
    [58, 87],
    [58, 83],
    [58, 79],
    [58, 55],
    [58, 42],
    [58, 71],
    [58, 78],
    [94, 26],
    [94, 49],
    [94, 32],
    [94, 89],
    [94, 85],
    [94, 35],
    [94, 46],
    [94, 16],
    [94, 47],
    [94, 13],
    [94, 27],
    [94, 79],
    [94, 15],
    [94, 28],
    [94, 81],
    [94, 67],
    [94, 39],
    [94, 24],
    [94, 71],
    [94, 34],
    [94, 52],
    [94, 25],
    [94, 37],
    [94, 96],
    [71, 47],
    [71, 89],
    [71, 52],
    [71, 96],
    [71, 81],
    [71, 18],
    [71, 67],
    [71, 46],
    [71, 16],
    [71, 15],
    [71, 37],
    [71, 79],
    [71, 32],
    [71, 28],
    [71, 39],
    [71, 25],
    [71, 35],
    [71, 13],
    [71, 24],
    [71, 49],
    [71, 34],
    [71, 85],
    [71, 26],
    [71, 27],
    [34, 26],
    [34, 42],
    [34, 61],
    [34, 81],
    [34, 96],
    [34, 85],
    [34, 48],
    [34, 27],
    [34, 46],
    [34, 45],
    [34, 18],
    [34, 47],
    [34, 67],
    [34, 24],
    [34, 49],
    [34, 39],
    [34, 12],
    [34, 32],
    [34, 58],
    [34, 15],
    [34, 65],
    [34, 13],
    [34, 64],
    [34, 75],
    [18, 75],
    [18, 53],
    [18, 42],
    [18, 29],
    [18, 66],
    [18, 94],
    [18, 59],
    [18, 87],
    [18, 11],
    [18, 33],
    [18, 58],
    [18, 61],
    [18, 65],
    [18, 12],
    [18, 98],
    [18, 83],
    [18, 45],
    [18, 51],
    [18, 78],
    [18, 55],
    [18, 19],
    [18, 64],
    [18, 48],
    [18, 73],
    [55, 25],
    [55, 47],
    [55, 33],
    [55, 19],
    [55, 59],
    [55, 24],
    [55, 11],
    [55, 16],
    [55, 26],
    [55, 81],
    [55, 83],
    [55, 89],
    [55, 34],
    [55, 35],
    [55, 94],
    [55, 37],
    [55, 87],
    [55, 52],
    [55, 51],
    [55, 79],
    [55, 67],
    [55, 53],
    [55, 71],
    [55, 28],
    [42, 61],
    [42, 83],
    [42, 98],
    [42, 53],
    [42, 89],
    [42, 87],
    [42, 59],
    [42, 45],
    [42, 35],
    [42, 29],
    [42, 73],
    [42, 94],
    [42, 78],
    [42, 19],
    [42, 79],
    [42, 66],
    [42, 11],
    [42, 33],
    [42, 37],
    [42, 52],
    [42, 28],
    [42, 71],
    [42, 51],
    [42, 55],
    [33, 89],
    [33, 46],
    [33, 71],
    [33, 79],
    [33, 37],
    [33, 35],
    [33, 96],
    [33, 13],
    [33, 26],
    [33, 16],
    [33, 85],
    [33, 47],
    [33, 52],
    [33, 39],
    [33, 28],
    [33, 15],
    [33, 34],
    [33, 67],
    [33, 49],
    [33, 25],
    [33, 94],
    [33, 81],
    [33, 27],
    [33, 24],
    [61, 37],
    [61, 87],
    [61, 98],
    [61, 29],
    [61, 73],
    [61, 11],
    [61, 79],
    [61, 51],
    [61, 28],
    [61, 25],
    [61, 33],
    [61, 94],
    [61, 55],
    [61, 78],
    [61, 16],
    [61, 89],
    [61, 71],
    [61, 66],
    [61, 53],
    [61, 59],
    [61, 35],
    [61, 19],
    [61, 83],
    [61, 52],
    [96, 53],
    [96, 42],
    [96, 32],
    [96, 29],
    [96, 11],
    [96, 66],
    [96, 75],
    [96, 12],
    [96, 48],
    [96, 51],
    [96, 59],
    [96, 87],
    [96, 65],
    [96, 64],
    [96, 78],
    [96, 55],
    [96, 18],
    [96, 19],
    [96, 73],
    [96, 61],
    [96, 45],
    [96, 58],
    [96, 98],
    [96, 83],
    [46, 27],
    [46, 75],
    [46, 32],
    [46, 18],
    [46, 96],
    [46, 58],
    [46, 55],
    [46, 61],
    [46, 19],
    [46, 53],
    [46, 87],
    [46, 98],
    [46, 66],
    [46, 51],
    [46, 29],
    [46, 42],
    [46, 83],
    [46, 78],
    [46, 45],
    [46, 12],
    [46, 48],
    [46, 73],
    [46, 64],
    [46, 65],
    [98, 47],
    [98, 28],
    [98, 59],
    [98, 26],
    [98, 51],
    [98, 34],
    [98, 87],
    [98, 11],
    [98, 16],
    [98, 89],
    [98, 81],
    [98, 71],
    [98, 79],
    [98, 83],
    [98, 25],
    [98, 19],
    [98, 33],
    [98, 37],
    [98, 52],
    [98, 55],
    [98, 35],
    [98, 94],
    [98, 53],
    [98, 67],
    [15, 98],
    [15, 61],
    [15, 39],
    [15, 75],
    [15, 78],
    [15, 66],
    [15, 65],
    [15, 32],
    [15, 45],
    [15, 64],
    [15, 58],
    [15, 48],
    [15, 55],
    [15, 18],
    [15, 96],
    [15, 29],
    [15, 12],
    [15, 27],
    [15, 19],
    [15, 73],
    [15, 49],
    [15, 85],
    [15, 42],
    [15, 46],
    [47, 48],
    [47, 32],
    [47, 65],
    [47, 39],
    [47, 26],
    [47, 64],
    [47, 78],
    [47, 18],
    [47, 29],
    [47, 96],
    [47, 49],
    [47, 58],
    [47, 42],
    [47, 24],
    [47, 27],
    [47, 15],
    [47, 67],
    [47, 45],
    [47, 12],
    [47, 61],
    [47, 85],
    [47, 13],
    [47, 46],
    [47, 75],
    [85, 45],
    [85, 19],
    [85, 58],
    [85, 83],
    [85, 12],
    [85, 27],
    [85, 87],
    [85, 55],
    [85, 46],
    [85, 64],
    [85, 29],
    [85, 61],
    [85, 73],
    [85, 65],
    [85, 42],
    [85, 96],
    [85, 78],
    [85, 66],
    [85, 48],
    [85, 18],
    [85, 39],
    [85, 75],
    [85, 98],
    [85, 32],
    [89, 67],
    [89, 52],
    [89, 96],
    [89, 16],
    [89, 28],
    [89, 27],
    [89, 35],
    [89, 37],
    [89, 49],
    [89, 39],
    [89, 81],
    [89, 32],
    [89, 24],
    [89, 25],
    [89, 26],
    [89, 18],
    [89, 75],
    [89, 15],
    [89, 47],
    [89, 58],
    [89, 85],
    [89, 13],
    [89, 34],
    [89, 46],
    [25, 46],
    [25, 64],
    [25, 48],
    [25, 42],
    [25, 12],
    [25, 18],
    [25, 85],
    [25, 32],
    [25, 26],
    [25, 75],
    [25, 67],
    [25, 65],
    [25, 27],
    [25, 58],
    [25, 15],
    [25, 13],
    [25, 45],
    [25, 49],
    [25, 81],
    [25, 39],
    [25, 47],
    [25, 96],
    [25, 24],
    [25, 34],
    [73, 71],
    [73, 52],
    [73, 83],
    [73, 25],
    [73, 94],
    [73, 34],
    [73, 19],
    [73, 33],
    [73, 81],
    [73, 59],
    [73, 53],
    [73, 35],
    [73, 55],
    [73, 16],
    [73, 66],
    [73, 28],
    [73, 37],
    [73, 51],
    [73, 98],
    [73, 11],
    [73, 79],
    [73, 47],
    [73, 87],
    [78, 83],
    [78, 55],
    [78, 19],
    [78, 25],
    [78, 11],
    [78, 28],
    [78, 87],
    [78, 66],
    [78, 81],
    [78, 94],
    [78, 52],
    [78, 51],
    [78, 34],
    [78, 79],
    [78, 37],
    [78, 16],
    [78, 33],
    [78, 53],
    [78, 35],
    [78, 89],
    [78, 73],
    [78, 98],
    [32, 45],
    [32, 73],
    [32, 98],
    [32, 87],
    [32, 48],
    [32, 65],
    [32, 19],
    [32, 51],
    [32, 42],
    [32, 18],
    [32, 59],
    [32, 75],
    [32, 78],
    [32, 29],
    [32, 64],
    [32, 53],
    [32, 55],
    [32, 11],
    [32, 61],
    [32, 33],
    [32, 83],
    [13, 73],
    [13, 75],
    [13, 15],
    [13, 39],
    [13, 32],
    [13, 18],
    [13, 98],
    [13, 78],
    [13, 65],
    [13, 45],
    [13, 12],
    [13, 64],
    [13, 96],
    [13, 27],
    [13, 49],
    [13, 58],
    [13, 85],
    [13, 55],
    [13, 48],
    [13, 42],
    [66, 19],
    [66, 59],
    [66, 81],
    [66, 53],
    [66, 98],
    [66, 79],
    [66, 28],
    [66, 52],
    [66, 87],
    [66, 55],
    [66, 35],
    [66, 33],
    [66, 83],
    [66, 47],
    [66, 67],
    [66, 89],
    [66, 51],
    [66, 16],
    [66, 94],
    [67, 42],
    [67, 61],
    [67, 27],
    [67, 65],
    [67, 12],
    [67, 45],
    [67, 73],
    [67, 46],
    [67, 13],
    [67, 48],
    [67, 39],
    [67, 64],
    [67, 78],
    [67, 96],
    [67, 49],
    [67, 15],
    [67, 26],
    [67, 18],
    [29, 66],
    [29, 37],
    [29, 71],
    [29, 83],
    [29, 34],
    [29, 51],
    [29, 89],
    [29, 52],
    [29, 94],
    [29, 73],
    [29, 19],
    [29, 78],
    [29, 98],
    [29, 79],
    [29, 55],
    [29, 53],
    [29, 28],
    [11, 26],
    [11, 89],
    [11, 39],
    [11, 67],
    [11, 33],
    [11, 25],
    [11, 35],
    [11, 81],
    [11, 16],
    [11, 85],
    [11, 24],
    [11, 13],
    [11, 94],
    [11, 59],
    [11, 71],
    [11, 34],
    [19, 71],
    [19, 52],
    [19, 83],
    [19, 24],
    [19, 28],
    [19, 25],
    [19, 47],
    [19, 37],
    [19, 35],
    [19, 33],
    [19, 51],
    [19, 16],
    [19, 59],
    [19, 53],
    [19, 87],
    [12, 78],
    [12, 71],
    [12, 52],
    [12, 19],
    [12, 83],
    [12, 45],
    [12, 11],
    [12, 42],
    [12, 66],
    [12, 51],
    [12, 61],
    [12, 33],
    [12, 59],
    [12, 98],
    [48, 33],
    [48, 52],
    [48, 83],
    [48, 19],
    [48, 45],
    [48, 71],
    [48, 94],
    [48, 78],
    [48, 59],
    [48, 11],
    [48, 55],
    [48, 98],
    [48, 29],
    [79, 35],
    [79, 25],
    [79, 39],
    [79, 16],
    [79, 37],
    [79, 15],
    [79, 96],
    [79, 32],
    [79, 49],
    [79, 27],
    [79, 46],
    [79, 47],
    [64, 48],
    [64, 73],
    [64, 71],
    [64, 65],
    [64, 89],
    [64, 42],
    [64, 12],
    [64, 59],
    [64, 79],
    [64, 45],
    [64, 61],
    [52, 27],
    [52, 64],
    [52, 47],
    [52, 28],
    [52, 96],
    [52, 39],
    [52, 67],
    [52, 25],
    [52, 26],
    [52, 34],
    [87, 52],
    [87, 16],
    [87, 15],
    [87, 67],
    [87, 94],
    [87, 71],
    [87, 89],
    [87, 26],
    [87, 59],
    [27, 66],
    [27, 65],
    [27, 96],
    [27, 98],
    [27, 12],
    [27, 11],
    [27, 48],
    [27, 87],
    [35, 65],
    [35, 46],
    [35, 28],
    [35, 13],
    [35, 47],
    [35, 26],
    [35, 18],
    [75, 64],
    [75, 51],
    [75, 12],
    [75, 42],
    [75, 11],
    [75, 19],
    [59, 25],
    [59, 89],
    [59, 71],
    [59, 39],
    [59, 27],
    [53, 26],
    [53, 11],
    [53, 25],
    [53, 28],
    [83, 87],
    [83, 25],
    [83, 34],
    [24, 64],
    [24, 75],
    [39, 29],
]

function followsorder(array, order) {
    const idx = {};
    array.forEach((num, i) => {
        idx[num] = i;
    });
    console.log(idx)

    for (const [a, b] of order) {
        if (idx[a] !== undefined && idx[b] !== undefined && idx[a] >= idx[b]) {
            return [false, 0];
        }
    }
    return [true, array[Math.floor(array.length / 2)]];
}




const program = (array) => {
    let ans = 0;

    array.forEach(array => {
        const [good, mid] = followsorder(array, order);
        if (good) {
            ans += mid;
        }
    });
    return ans 
}

console.time("Execution Time")
console.log(program(array))
console.timeEnd("Execution Time")