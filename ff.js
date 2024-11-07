
        var n1=document.getElementById("num1");
        var n2=document.getElementById("num2");
        var res=document.getElementById("result");
        document.getElementById("add").addEventListener ("click",function(){
            res.value=parseInt(n1.value)+parseInt(n2.value);
        });
        document.getElementById("sub").addEventListener ("click",function(){
            res.value=parseInt(n1.value)-parseInt(n2.value);
        });
        document.getElementById("mul").addEventListener ("click",function(){
            res.value=parseInt(n1.value)*parseInt(n2.value);
        });
        document.getElementById("div").addEventListener ("click",function(){
            res.value=parseInt(n1.value)/parseInt(n2.value);
        });
        document.getElementById('calculateLCM')
            .addEventListener('click', function () {
                const r1 = parseInt(document.getElementById('r1').value);
                const r2 = parseInt(document.getElementById('r2').value);
                if (isNaN(r1) || isNaN(r2)) {
                    showMessage('Please enter valid numbers!', 'text-red-500');
                    return;
                }
                const lcm = calculateLCM(r1, r2);
                            showMessage(`LCM of ${r1} and 
                            ${r2} is ${lcm}`, 'text-green-500');
            });
        document.getElementById('calculateHCF')
            .addEventListener('click', function () {
                const r1 = parseInt(document.getElementById('r1').value);
                const r2 = parseInt(document.getElementById('r2').value);
                if (isNaN(r1) || isNaN(r2)) {
                    showMessage('Please enter valid numbers!', 'text-red-500');
                    return;
                }
                const  hcf = calculateHCF(r1, r2);
                            showMessage(`HCF of ${r1} and 
                            ${r2} is ${hcf}`, 'text-green-500');
            });
        function calculateLCM(r1, r2) {
            return (r1 * r2) / calculateHCF(r1, r2);
        }
        function calculateHCF(r1, r2) {
            while (r2 !== 0) {
                let temp = r2;
                r2 = r1 % r2;
                r1 = temp;
            }
            return r1;
        }
        function showMessage(messageText, textColor) {
            const message = document.getElementById('sult');
            message.textContent = messageText;
            message.classList
                   .remove('text-red-500', 'text-green-500');
            message.classList.add(textColor);
        }
        function selectShape() {
            resetResults()

            const shape = document.getElementById("shape").value;
            document.getElementById("input-fields").style.display = "block";

            const divs = [
                "length-div", "width-div", "base-div", 
                "height-div", "radius-div"
            ];
            
            for (const div of divs) {
                document.getElementById(div).style.display = "none";
            }

            if (shape === "rectangle") {
                document.getElementById("length-div").style.display = "block";
                document.getElementById("width-div").style.display = "block";
            } else if (shape === "triangle") {
                document.getElementById("base-div").style.display = "block";
                document.getElementById("height-div").style.display = "block";
            } else if (shape === "circle") {
                document.getElementById("radius-div").style.display = "block";
            } else if (shape === "square") {
                document.getElementById("length-div").style.display = "block";
                document.getElementById("width-div").style.display = "block";
            } else if (shape === "parallelogram") {
                document.getElementById("base-div").style.display = "block";
                document.getElementById("height-div").style.display = "block";
            }
        }

        function calculate() {
            const shape = 
                document.getElementById("shape").value;
            const areaElement = 
                document.getElementById("area");
            const perimeterElement = 
                document.getElementById("perimeter");

            let area, perimeter;

            if (shape === "rectangle") {
                const length = parseFloat(
                    document.getElementById("length").value);
                const width = parseFloat(
                    document.getElementById("width").value);
                area = length * width;
                perimeter = 2 * (length + width);
            } else if (shape === "triangle") {
                const base = parseFloat(
                    document.getElementById("base").value);
                const height = parseFloat(
                    document.getElementById("height").value);
                area = 0.5 * base * height;
                perimeter = base + 2 * Math.sqrt(
                    Math.pow(height, 2) + Math.pow(base / 2, 2));
            } else if (shape === "circle") {
                const radius = parseFloat(
                    document.getElementById("radius").value);
                area = Math.PI * Math.pow(radius, 2);
                perimeter = 2 * Math.PI * radius;
            } else if (shape === "square") {
                const side = parseFloat(
                    document.getElementById("length").value);
                area = side * side;
                perimeter = 4 * side;
            } else if (shape === "parallelogram") {
                const base = parseFloat(
                    document.getElementById("base").value);
                const height = parseFloat(
                    document.getElementById("height").value);
                area = base * height;
                perimeter = 2 * (base + height);
            }

            areaElement.textContent = 
                `Area: ${area.toFixed(2)}`;
            perimeterElement.textContent = 
                `Perimeter: ${perimeter.toFixed(2)}`;
            document.getElementById("results")
                .style.display = "block";
        }

        function resetResults() {
            document.getElementById("results")
                .style.display = "none";
        }

        document.getElementById('calculate-btn')
            .addEventListener('click', () => {
                calculate()
            });

        selectShape();   