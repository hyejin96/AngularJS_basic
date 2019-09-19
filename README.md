1. AngularJS 란?<br>
(1) 자바스크립트로 만든 client측 MVC / MVVM 프레임워크로 모던 다닝ㄹ 페이지 웹 어플리케이션 개발의 정수이다.
<br>
2. MVC(모델, 뷰, 컨트롤러) / MVVM<br>
(1) MVC(모델, 뷰, 컨트롤러)<br>
- 모델: <br>
 ■ 보통 JSON으로 표현되는 애플리케이션의 특정한 데이터 구조를 말한다.<br>
 ■ 뷰가 서버와 통신하기 위해 꼭 필요한 것이다.<br>

- 뷰:<br>
 ■ HTML을 말한다.<br>
 ■ MVC 프레임워크를 사용한다면 뷰를 갱신할 모델 데이터를 내려받은 뒤 HTML에서 해당 데이터를 보여줄 것이다.<br>

 - 컨트롤러: <br>
 ■ 서버에서 직접 뷰로 접근하는 일종의 중간 통로로서 필요할 때마다 서버와 클라이언트 통신으로 데이터를 변경한다.<br>

 - 동작방법<br>
  1. 사용자의 Action들은 Controller에 들어오게 됩니다.<br>

  2. Controller는 사용자의 Action를 확인하고, Model을 업데이트합니다.<br>

  3. Controller는 Model을 나타내줄 View를 선택합니다.<br>

  4. View는 Model을 이용하여 화면을 나타냅니다.<br>

 - 특징<br>
 ■ Controller는 여러개의 view를 선택할 수 있는 1:n의 구조이다.<br>
 ■ controller는 view를 선택할 뿐 업데이트를 하지 못한다.<br>
 ■ view는 controller를 알지 못한다.<br>

 - 장점 <br>
 ■ 단순하고, 가장 많이 사용한다.<br>

 - 단점<br>
 ■ view와 model 사이의 의존성이 높다는 것이다.<br>
 ■ 어플리케이션이 커질수록 복잡해지고 유지보수가 어렵게 만들어 질 수 있다.<br>

(2) MVVM(모델, 뷰, 뷰 모델)<br>
 - Model <br>
 ■ 어플리케이션에서 사용되는 데이터와 그 데이터를 처리하는 부분이다.<br>

 - View(여기로 액션이 들어옴)<br>
 ■ 사용자에게 보여지는 부분<br>

 - View Model<br>
 ■ view를 위한 model이다.<br>
 ■ view를 나타내 주기 위한 model이자 view를 나타내기 위한 데이터 처리를 하는 부분이다.<br>

 - 동작방법<br>
 1. 사용자의 Action들은 View를 통해 들어오게 됩니다.<br>

 2. View에 Action이 들어오면, Command 패턴으로 View Model에 Action을 전달합니다.<br>

 3. View Model은 Model에게 데이터를 요청합니다.<br>

 4. Model은 View Model에게 요청받은 데이터를 응답합니다.<br>

 5. View Model은 응답 받은 데이터를 가공하여 저장합니다.<br>

 6. View는 View Model과 Data Binding하여 화면을 나타냅니다.<br>

 - 특징<br>
 ■  view와 view model 사이의 의존성을 없앴다.<br>

3. AngularJS의 주요 개념<br>
 Scope, Model, View, Controller, Directives, Data Binding, Module<br>
 - Scope<br>
 ■ 모델 변경을 감지하고 표현하기 위한 책임을 가지고 있다.<br>

 - Model<br>
 ■ Scope는 항상 모델을 참조하고 있다.<br>
 ■ 화면 템플릿에 합쳐지는 데이터를 가지고 있는 일반 자바스크립트 객체이다.<br>

 - View<br>
 ■ 템플릿으로 Scope의 투영체이고, Scope는 Model과 View를 연결하며 controller로 이벤트를 보내는 역할을 한다.<br>

 - Controller<br>
 ■ View뒤에서 반드시 수행하는 코드이다.<br>

 - Directives<br>
 ■ html을 확장하여 주고 행위를 일으키는 주체<br>
 ■ 데이터 바인딩을 위한 {{}},
   ng-controller, ng-model 모두 Directive를 이용한 확장 문법이다.<br>

 - Data Binding<br>
 ■ 모델과 뷰의 데이터를 실시간으로 연동<br>

 - Module<br>
 ■ ng-app = "모듈명"을 시작으로 모듈 단위로 관리된다.<br>

