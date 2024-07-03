import Page from "./page.js";


class CartPage extends Page {
    open(path) {
        return super.open("cart.html")
    }

    get qtyLabel() {
        return $('.cart_quantity_label')
    }

    async validateOnPage() {
        this.qtyLabel.waitForDisplayed({timeout: 10000})
    }

    get descriptionLabel() {
        return $('.cart_desc_label')
    }

    async validateOnPage() {
        (await this.descriptionLabel).waitForDisplayed({timeout: 10000})
    }

    get cartItemLabel() {
        return $('.cart_item_label')
    }

    async validateOnPage() {
        (await this.cartItemLabel).waitForDisplayed({timeout: 10000})
    }
    
    get checkoutButton() {
        return $("#checkout")
    }

    async validateOnPage() {
        (await this.checkoutButton).waitForDisplayed({timeout: 10000})
    }

}

export default new CartPage();