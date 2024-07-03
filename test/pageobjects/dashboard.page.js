import Page from "./page.js";


class DashboardPage extends Page{
    open(path) {
        return super.open("inventory.html")
    }

    get cartIcon() {
        return $("#shopping_cart_container");
    }

    async validateOnPage() {
        (await this.cartIcon).waitForDisplayed({ timeout:10000 })
        expect(this.cartIcon).toBeDisplayed()
        browser.pause(20000)
    
    }

    get productList() {
        return $("#inventory_container");
    }

    async validateOnPage() {
        (await this.productList).waitForDisplayed({timeout:10000})
        expect(this.productList).toBeDisplayed()
    }

    get sortIcon() {
        return $('.product_sort_container');
    }

    async validateOnPage() {
        (await this.sortIcon).waitForDisplayed({timeout:100000})
        expect(this.sortIcon).toBeDisplayed()
    }

    get addToCartIcon() {
        return $("#add-to-cart-sauce-labs-backpack");
    }
    async clickAddItem() {
        await this.addToCartIcon.click() 
    }

    get cartIcon() {
        return $("#shopping_cart_container");
    }
    async clickCartIcon() {
        await this.cartIcon.click()
    }
}

export default new DashboardPage();