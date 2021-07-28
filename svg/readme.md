## 文件标签

## 应用
1. img src
2. background
3. iframe
4. 直接引用

## 直接使用

## 标签
1. circle
    - cx cy r
    - fill = "transparent" stroke stroke-width
    - style 
2. rect
    - width height x y
    - rx ry
3. line 
    - x1 y1 x2 y2
    - stroke stroke-width
   - stroke-opacity

4. g :ground
    - 通用属性
    - transform (cs3)

5. text
    - x y
    - text-anchor:middle star end 
    - font-size 

6. image
    - x y width height
    - xlink:href

7. polyline 
    - points= "1 1 2 2 5 3..."
8. polygon 
    - points 

9. path
    - d属性 M: L H V A Z
        - Ax y angle 0/1 0/1 x2 y2
    - C T Q R
    - 小写为相对坐标，大写为绝对坐标

10. animate 运动标签

## createElementNS() // create element namespace
    - document.createElementNS("http://www.w3.org/2000/svg", "svg")