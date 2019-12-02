const pi = Math.PI

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return (this.radius *2)
    }

    get circumference() {
        return (pi * this.diameter)
    }

    get area() {
        return (pi * (this.radius **2))
    }

    set diameter(diam) {
        this.radius = diam/2
    }

    set circumference(circ) {
        this.radius = (circ/pi)/2
    }
}