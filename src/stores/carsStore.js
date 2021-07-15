import { firebase } from "../common/firebase";
import { makeAutoObservable } from "mobx";

export class CarsStore {
  cars = [];
  filteredCars = [];
  carDetails = null;
  isLoading = true;
  itemsPerPage = 8;
  pageCount = 1;
  currentPage = 1;
  constructor() {
    makeAutoObservable(this);
    this.loadCars();
  }

  getCarsByPage() {
    if (this.currentPage < this.pageCount) {
      return this.filteredCars.slice(
        (this.currentPage - 1) * this.itemsPerPage,
        this.itemsPerPage
      );
    } else if (this.currentPage > this.pageCount) {
      this.currentPage = this.pageCount;
      return this.filteredCars.slice(
        (this.currentPage - 1) * this.itemsPerPage,
        this.itemsPerPage
      );
    } else {
      return this.filteredCars.slice(
        (this.currentPage - 1) * this.itemsPerPage,
        this.filteredCars.length
      );
    }
  }

  calculatePages() {
    this.pageCount = Math.ceil(this.filteredCars.length / this.itemsPerPage);
  }
  changePage(page) {
    this.currentPage = page;
  }

  sortCars() {
    this.filteredCars = this.filteredCars.sort((a, b) =>
      a.model > b.model ? 1 : b.model > a.model ? -1 : 0
    );
  }

  filterCars(filter) {
    if (filter) {
      const result = this.cars.filter((car) =>
        car.brand
          ? car.brand.toUpperCase().includes(filter.toUpperCase())
          : false
      );
      this.filteredCars = result;
    } else {
      this.filteredCars = this.cars;
    }
    this.calculatePages();
  }

  loadCars() {
    firebase
      .database()
      .ref("cars")
      .on("value", (snapshot) => {
        let result = [];
        snapshot.forEach((child) => {
          result.push({ ...child.val(), key: child.key });
        });
        this.cars = [...result];
        this.filterCars("");
        this.calculatePages();
        this.stopLoading();
      });
  }

  stopLoading() {
    this.isLoading = false;
  }

  getDetails(id) {
    firebase
      .database()
      .ref("cars")
      .child(id)
      .once("value", (snapshot) => {
        this.carDetails = snapshot.val();
      });
  }

  add(values) {
    const id = firebase.database().ref("cars").push().key;
    this.update(id, values);
  }

  update(id, values) {
    firebase
      .database()
      .ref("cars")
      .update({ [id]: { ...values } });
  }

  delete = (id) => {
    firebase.database().ref("cars").child(id).remove();
  };
}
