import { Component } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
})
export class DataGridComponent {
  // Mock data source
  requestList: any[] = [
    {
      requestTypeName: 'Type C',
      bookingSource: 'Supplier A',
      pnr: '12345',
      sector: 'Trip A',
      bookingAgencyId: 'ABC123',
      tktNo: 'T123',
      modifydate: '2024-03-01',
      creationDate: '2024-03-01',
      travelDate: '2024-03-05',
      passName: 'John Doe',
      status: 'Open',
    },
    {
      requestTypeName: 'Type C',
      bookingSource: 'Supplier A',
      pnr: '12345',
      sector: 'Trip A',
      bookingAgencyId: 'ABC123',
      tktNo: 'T123',
      modifydate: '2024-03-01',
      creationDate: '2024-03-01',
      travelDate: '2024-03-05',
      passName: 'John Doe',
      status: 'Open',
    },
    {
      requestTypeName: 'Type C',
      bookingSource: 'Supplier A',
      pnr: '12345',
      sector: 'Trip A',
      bookingAgencyId: 'ABC123',
      tktNo: 'T123',
      modifydate: '2024-03-01',
      creationDate: '2024-03-01',
      travelDate: '2024-03-05',
      passName: 'John Doe',
      status: 'Open',
    },

    {
      requestTypeName: 'Type D',
      bookingSource: 'Supplier A',
      pnr: '12345',
      sector: 'Trip A',
      bookingAgencyId: 'ABC123',
      tktNo: 'T123',
      modifydate: '2024-03-01',
      creationDate: '2024-03-01',
      travelDate: '2024-03-05',
      passName: 'John Doe',
      status: 'Open',
    },
    {
      requestTypeName: 'Type D',
      bookingSource: 'Supplier A',
      pnr: '12345',
      sector: 'Trip A',
      bookingAgencyId: 'ABC123',
      tktNo: 'T123',
      modifydate: '2024-03-01',
      creationDate: '2024-03-01',
      travelDate: '2024-03-05',
      passName: 'John Doe',
      status: 'Open',
    },
    {
      requestTypeName: 'Type D',
      bookingSource: 'Supplier A',
      pnr: '12345',
      sector: 'Trip A',
      bookingAgencyId: 'ABC123',
      tktNo: 'T123',
      modifydate: '2024-03-01',
      creationDate: '2024-03-01',
      travelDate: '2024-03-05',
      passName: 'John Doe',
      status: 'Open',
    },

    {
      requestTypeName: 'Type E',
      bookingSource: 'Supplier A',
      pnr: '12345',
      sector: 'Trip A',
      bookingAgencyId: 'ABC123',
      tktNo: 'T123',
      modifydate: '2024-03-01',
      creationDate: '2024-03-01',
      travelDate: '2024-03-05',
      passName: 'John Doe',
      status: 'Open',
    },
    {
      requestTypeName: 'Type E',
      bookingSource: 'Supplier A',
      pnr: '12345',
      sector: 'Trip A',
      bookingAgencyId: 'ABC123',
      tktNo: 'T123',
      modifydate: '2024-03-01',
      creationDate: '2024-03-01',
      travelDate: '2024-03-05',
      passName: 'John Doe',
      status: 'Open',
    },
    {
      requestTypeName: 'Type E',
      bookingSource: 'Supplier A',
      pnr: '12345',
      sector: 'Trip A',
      bookingAgencyId: 'ABC123',
      tktNo: 'T123',
      modifydate: '2024-03-01',
      creationDate: '2024-03-01',
      travelDate: '2024-03-05',
      passName: 'John Doe',
      status: 'Open',
    },
    {
      requestTypeName: 'Type E',
      bookingSource: 'Supplier A',
      pnr: '12345',
      sector: 'Trip A',
      bookingAgencyId: 'ABC123',
      tktNo: 'T123',
      modifydate: '2024-03-01',
      creationDate: '2024-03-01',
      travelDate: '2024-03-05',
      passName: 'John Doe',
      status: 'Open',
    },
    {
      requestTypeName: 'Type J',
      bookingSource: 'Supplier A',
      pnr: '12345',
      sector: 'Trip A',
      bookingAgencyId: 'ABC123',
      tktNo: 'T123',
      modifydate: '2024-03-01',
      creationDate: '2024-03-01',
      travelDate: '2024-03-05',
      passName: 'John Doe',
      status: 'Open',
    },

    {
      requestTypeName: 'Type D',
      bookingSource: 'Supplier B',
      pnr: '67890',
      sector: 'Trip B',
      bookingAgencyId: 'DEF456',
      tktNo: 'T456',
      modifydate: '2024-03-02',
      creationDate: '2024-03-02',
      travelDate: '2024-03-06',
      passName: 'Jane Doe',
      status: 'Closed',
    },
    {
      requestTypeName: 'Type I',
      bookingSource: 'Supplier B',
      pnr: '67890',
      sector: 'Trip B',
      bookingAgencyId: 'DEF456',
      tktNo: 'T456',
      modifydate: '2024-03-02',
      creationDate: '2024-03-02',
      travelDate: '2024-03-06',
      passName: 'Jane Doe',
      status: 'Closed',
    },
    {
      requestTypeName: 'Type D',
      bookingSource: 'Supplier B',
      pnr: '67890',
      sector: 'Trip B',
      bookingAgencyId: 'DEF456',
      tktNo: 'T456',
      modifydate: '2024-03-02',
      creationDate: '2024-03-02',
      travelDate: '2024-03-06',
      passName: 'Jane Doe',
      status: 'Closed',
    },
    {
      requestTypeName: 'Type H',
      bookingSource: 'Supplier B',
      pnr: '67890',
      sector: 'Trip B',
      bookingAgencyId: 'DEF456',
      tktNo: 'T456',
      modifydate: '2024-03-02',
      creationDate: '2024-03-02',
      travelDate: '2024-03-06',
      passName: 'Jane Doe',
      status: 'Closed',
    },
    {
      requestTypeName: 'Type G',
      bookingSource: 'Supplier B',
      pnr: '67890',
      sector: 'Trip B',
      bookingAgencyId: 'DEF456',
      tktNo: 'T456',
      modifydate: '2024-03-02',
      creationDate: '2024-03-02',
      travelDate: '2024-03-06',
      passName: 'Jane Doe',
      status: 'Closed',
    },
    {
      requestTypeName: 'Type C',
      bookingSource: 'Supplier B',
      pnr: '67890',
      sector: 'Trip B',
      bookingAgencyId: 'DEF456',
      tktNo: 'T456',
      modifydate: '2024-03-02',
      creationDate: '2024-03-02',
      travelDate: '2024-03-06',
      passName: 'Jane Doe',
      status: 'Closed',
    },

    // Add more mock data as needed
  ];

  // Define filtered data for each tab
  filteredData: { [key: string]: any[] } = {};

  constructor() {
    // Initialize filtered data for each unique requestTypeName
    this.initializeFilteredData();
    console.log(this.filteredData);
  }

  // Method to initialize filtered data for each unique requestTypeName
  initializeFilteredData(): void {
    const uniqueRequestTypes = this.getUniqueRequestTypes();
    uniqueRequestTypes.forEach((type) => {
      this.filteredData[type] = this.filterDataByRequestType(type);
    });
  }

  // Method to get unique requestTypeName values
  getUniqueRequestTypes(): string[] {
    return Array.from(
      new Set(this.requestList.map((item) => item.requestTypeName))
    );
  }

  // Method to filter data by requestTypeName
  filterDataByRequestType(requestType: string): any[] {
    return this.requestList.filter(
      (item) => item.requestTypeName === requestType
    );
  }

  onTabSelected() {
    console.log('requestTypeName');
  }

  // Method to handle tab change
  onTabChange(selectedTab: any): void {
    // You can implement additional logic here if needed
  }

  // Method to handle edit request
  onClickEditRequest(event: any): void {
    // Handle edit request button click event
  }
}
