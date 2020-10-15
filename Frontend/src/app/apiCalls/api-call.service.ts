import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from './user.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  selectedUser: User = {
    mobile_number: '',
    email_id: '',
    password: '',
    user_name: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ NoAuth: 'True' }) };

  constructor(private http: HttpClient) { }

  // HttpMethods

  postUser(user: User) {
    return this.http.post(environment.apiBaseUrl + '/signup', user, this.noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials, this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userProfile');
  }

  getuserdata() {
    return this.http.get(environment.apiBaseUrl + '/partner/' + this.getPartner_id() + '/getuserdata');
  }

  getClients() {
    return this.http.get(environment.apiBaseUrl + '/partner/' + this.getPartner_id() + '/getClients');
  }

  getuserDetails(data) {
    return this.http.post(environment.apiBaseUrl + '/partner/' + this.getPartner_id() + '/getuserDetails', data);
  }

  updateclientData(data) {
    return this.http.put(environment.apiBaseUrl + '/partner/' + this.getPartner_id() + '/updateclientData', data);
  }

  deleteclient(data) {
    return this.http.post(environment.apiBaseUrl + '/partner/' + this.getPartner_id() + '/deleteclient', data);
  }

  getAllPackages() {
    return this.http.get(environment.apiBaseUrl + '/partner/' + this.getPartner_id()+ '/getAllPackages');
  }

  addPackages(data) {
    return this.http.post(environment.apiBaseUrl +'/partner/' + this.getPartner_id() + '/addPackages', data);
  }

  getPackageDetails(data) {
    return this.http.post(environment.apiBaseUrl + '/getPackageDetails', data);
  }
  updatePackage(data) {
    return this.http.put(environment.apiBaseUrl + '/updatePackage', data);
  }

  deletePackage(data) {
    return this.http.post(environment.apiBaseUrl + '/deletePackage', data);
  }

  getpurchaseData() {
    return this.http.get(environment.apiBaseUrl + '/getpurchaseData');
  }

  getpurchaseDetailed(data) {
    return this.http.post(environment.apiBaseUrl + '/getpurchaseDetailed', data);
  }

  getSalesData(data) {
    return this.http.post(environment.apiBaseUrl + '/getSalesData', data);
  }

  getpurchaseDataByDate(data) {
    return this.http.post(environment.apiBaseUrl + '/getpurchaseDataByDate', data);
  }

  updatePaymentStatus(data) {
    return this.http.put(environment.apiBaseUrl + '/updatePaymentStatus', data);
  }

  sendSMS(data) {
    return this.http.post(environment.apiBaseUrl + '/sendSMS', data);
  }

  activationEmail(data) {
    return this.http.post(environment.apiBaseUrl + '/activationEmail', data);
  }

  addnewClient(data) {
    return this.http.post(environment.apiBaseUrl + '/partner/' + this.getPartner_id() + '/addnewClient', data);
  }

  getAllTickets() {
    return this.http.get(environment.apiBaseUrl + '/getAllTickets');
  }

  getDataByQuery(data) {
    return this.http.post(environment.apiBaseUrl + '/getDataByQuery', data);
  }

  updateticketstatus(data) {
    return this.http.put(environment.apiBaseUrl + '/updateticketstatus', data);
  }

  addtemplateType(event_code: string, display_name: string, profileImage: File): Observable<any> {
    const formData: any = new FormData();
    formData.append('event_code', event_code);
    formData.append('avatar', profileImage);
    formData.append('display_name', display_name);

    return this.http.post<User>(environment.apiBaseUrl + '/addTemplateType', formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  addnewTemplate(data) {
    return this.http.post(environment.apiBaseUrl + '/addnewTemplate', data);
  }
  getAllTemplateTypes() {
    return this.http.get(environment.apiBaseUrl + '/getAllTemplateTypes');
  }

  getevents() {
    return this.http.get(environment.apiBaseUrl + '/getevents');
  }

  getsmsTemplates(data) {
    return this.http.post(environment.apiBaseUrl + '/getsmsTemplates', data);
  }

  uploadtemplates(data) {
    return this.http.post(environment.apiBaseUrl + '/uploadtemplates', data)
  }



  getAllCards() {
    return this.http.get(environment.apiBaseUrl + '/getAllCards');
  }

  uploaddigitalprofile(title: string, profileImage: File, category: string): Observable<any> {
    const formData: any = new FormData();
    formData.append('title', title);
    formData.append('avatar', profileImage);
    formData.append('category', category);
    return this.http.post<User>(environment.apiBaseUrl + '/uploaddcprofile', formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  postPaymentTransaction(TxnOrderId: string, payment_mode: string, payment_gateway_txn_ref, payment_gateway_txn_id, client_id, authkey, profileImage: File, notes: string, totalamount: string, discountAmount: number): Observable<any> {
    const formData: any = new FormData();
    formData.append('TxnOrderId', TxnOrderId);
    formData.append('payment_mode', payment_mode);
    formData.append('payment_gateway_txn_ref', payment_gateway_txn_ref);
    formData.append('payment_gateway_txn_id', payment_gateway_txn_id);
    formData.append('client_id', client_id);
    formData.append('authkey', authkey);
    formData.append('avatar', profileImage);
    formData.append('notes', notes);
    formData.append('totalamount', totalamount);
    formData.append('discountAmount', discountAmount);
    return this.http.post<User>(environment.apiBaseUrl + '/postPaymentTransaction', formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  uploadapk(title: string, profileImage: File): Observable<any> {
    const formData: any = new FormData();
    formData.append('title', title);
    formData.append('avatar', profileImage);

    return this.http.post<User>(environment.apiBaseUrl + '/uploadapk', formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  deletetemplate(data) {
    return this.http.post(environment.apiBaseUrl + '/deletetemplate', data)
  }

  createbulkcontacts(data) {
    return this.http.post(environment.apiBaseUrl + '/partner/' + this.getPartner_id() + '/createbulkprofiles', data)
  }

  getallapkslist() {
    return this.http.get(environment.apiBaseUrl + '/getallapkslist')
  }

  deleteapk(data) {
    return this.http.post(environment.apiBaseUrl + '/deleteapk', data)
  }

  updateclientStatus(data) {
    return this.http.post(environment.apiBaseUrl + '/updateclientStatus', data)
  }

  getclientsbyfilter(data) {
    return this.http.post(environment.apiBaseUrl + '/partner/' + this.getPartner_id() + '/getclientsbyfilter', data)
  }

  getsmspackagelist() {
    return this.http.get(environment.apiBaseUrl + '/getsmspackagelist')
  }

  getclientdetails(data) {
    return this.http.post(environment.apiBaseUrl + '/partner/' + this.getPartner_id() + '/getclientdetails', data)
  }
  getOrderId(data) {
    return this.http.post(environment.apiBaseUrl + '/getOrderId', data)
  }

  getpremiumplanlist() {
    return this.http.get(environment.apiBaseUrl + '/getpremiumplanlist')
  }

  postofficeApi(data) {
    return this.http.post(environment.apiBaseUrl + '/postofficeApi', data)
  }

  getplanexpirycontacts(data) {
    return this.http.post(environment.apiBaseUrl + '/partner/' + this.getPartner_id() + '/getplanexpirycontacts', data)

  }

  getplanexpirycontactsAll() {
    return this.http.get(environment.apiBaseUrl + '/partner/' + this.getPartner_id() + '/getplanexpirycontactsAll')

  }

  insertnotifications(data) {
    return this.http.post(environment.apiBaseUrl + '/insertnotifications', data)

  }

  registeredcontactstracking(data) {
    return this.http.post(environment.apiBaseUrl + '/partner/' + this.getPartner_id() + '/registeredcontactstracking', data)
  }

  getTodayregisterdData() {
    return this.http.get(environment.apiBaseUrl + '/partner/' + this.getPartner_id() + '/getTodayregisterdData')

  }

  getAllpremiumplans() {
    return this.http.get(environment.apiBaseUrl + '/getAllpremiumplans')

  }

  getpremiumplandetails(data) {
    return this.http.post(environment.apiBaseUrl + '/getpremiumplandetails', data)
  }

  fetchProfessions() {
    return this.http.get(environment.apiBaseUrl + '/fetchProfessions');
  }

  updatePremiumPlan(data) {
    return this.http.post(environment.apiBaseUrl + '/updatePremiumPlan', data)

  }

  deletePremiumPack(data) {
    return this.http.post(environment.apiBaseUrl + '/deletePremiumPack', data)

  }

  resetPassword(data) {
    return this.http.post(environment.apiBaseUrl + '/partner/' + this.getPartner_id() + '/ChangePassword', data)

  }


  submitcustomerdetails(data) {
    return this.http.post(environment.apiBaseUrl + '/submitcustomerdetails', data);
  }

  verifyOTP(data) {
    return this.http.post(environment.apiBaseUrl +'/partner/' + this.getPartner_id() + '/verifyOTP', data);

  }

  getuserdataCount() {
    return this.http.get(environment.apiBaseUrl +'/partner/' + this.getPartner_id() +  '/getuserdataCount');

  }
  userdataCountweekly() {
    return this.http.get(environment.apiBaseUrl +'/partner/' + this.getPartner_id() +  '/userdataCountweekly');
  }

  getplanexpirytoday() {
    return this.http.get(environment.apiBaseUrl +'/partner/' + this.getPartner_id() +  '/getplanexpirytoday');
  }
  getplanexpirynextweek() {
    return this.http.get(environment.apiBaseUrl +'/partner/' + this.getPartner_id() +  '/getplanexpirynextweek');
  }

  getclientscount() {
    return this.http.get(environment.apiBaseUrl +'/partner/' + this.getPartner_id() +  '/getclientscount');
  }


  // Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setRole(role: string) {
    localStorage.setItem('role', role);
  }

  getRole() {
    return localStorage.getItem('role');
  }

  setName(name: string) {
    localStorage.setItem('name', name);
  }

  getName() {
    return localStorage.getItem('name');
  }
  setPartner_id(partner_id: string) {
    localStorage.setItem('partner_id', partner_id);
  }

  getPartner_id() {
    return localStorage.getItem('partner_id');
  }

  deleteToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('partner_id');
  }


  getUserPayload() {
    let token = this.getToken();
    if (token) {
      let userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else {
      return null;
    }
  }

  isLoggedIn() {
    let userPayload = this.getUserPayload();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    }
    else {
      return false;
    }
  }
}
