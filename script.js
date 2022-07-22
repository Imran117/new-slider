class Slider {
    constructor(set) {
        this.slider = document.getElementById(set.el);
        this.elements = this.slider.querySelectorAll('.slider__inner-img');
        this.prev = this.slider.querySelector('.slider__btn-prev');
        this.next = this.slider.querySelector('.slider__btn-next');
        this.ind = this.slider.querySelector('.slider__indecators');
        this.indDots = this.ind.children
        this.result = [this.indDots, this.elements]
        this.activeSlide = 0
        for (let i = 0; i < this.elements.length; i++) {
            const elem = document.createElement("div")
            elem.className = 'slider__indecators-dot'
            i == 0 ? elem.classList.add('active') : null
            this.ind.append(elem)
            this.indDots[i].addEventListener('click', () => this.touchDots(i));
        }

        this.prev.addEventListener('click', () => this.sliderActive(this.prev))
        this.next.addEventListener('click', () => this.sliderActive(this.next))
    }

    sliderActive(btn) {

        this.delActive(this.result, 'active')
        if (btn === this.next) {
            if (this.activeSlide < this.elements.length - 1) {
                this.activeSlide++
            } else {
                this.activeSlide = 0
            }
        } else if (btn == this.prev) {
            if (this.activeSlide > 0) {
                this.activeSlide--
            } else {
                this.activeSlide = this.elements.length - 1
            }
        }

        this.elements[this.activeSlide].classList.add('active');
        this.indDots[this.activeSlide].classList.add('active')
    }

    delActive(notes, className = "active") {
        for (let i = 0; i < notes.length; i++) {
            const el = notes[i];
            if (Array.isArray(el) || el instanceof HTMLCollection || el instanceof NodeList) {
                for (let k = 0; k < el.length; k++) {
                    el[k].classList.remove(className)
                }
            } else {
                el.classList.remove('active')
            }
        }
    }

    touchDots(i) {
        this.delActive(this.result, 'active')
        this.indDots[i].classList.add('active')
        this.elements[i].classList.add('active')
        this.activeSlide = i
    }
}


const slider1 = new Slider({
    el: 'slider'
})
