import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tabList = [
    {
      name: '過去',
      active: true,
      text: '曾就讀於永慶高中、大林國中、排路國小，國小到國中都是桌球隊的隊員。   即將畢業於長榮大學資訊工程學系，學過以下；Python、JAVA、C++、HTML & CSS、PHP & MySQL、JavaScript、Android studio、Arduino、Photo shop和Illustrator等……    也曾接觸過Maya、Unity、PS和Adobe Illustrator等……',
    },
    {
      name: '現在目標',
      active: false,
      text: '  目前希望可以往前端的工程師方向去工作，擅長Python和Android studio寫程式。  可以接客製製作LINE機器人的案子，並且可以製作跟Arduino相關的案子，還想試著接接看剪輯影片的工作。',
    },
    {
      name: '未來',
      active: false,
      text: '  希望找到一個薪資比較好的工作，順便有屬於自己的投資。穩當地度過一生。',
    },
  ];

  tabClick(name: string) {
    this.tabList.find((item) => {
      // if (name === item.name) {
      //   item.active = true;
      // } else {
      //   item.active = false;
      // }
      item.active = name === item.name;
    });
  }
  nameParent = 'Angular 5';
  showArea = 0;
  onClick(number: number) {
    switch (number) {
      case 1:
        this.showArea = 1;
        break;
      case 2:
        this.showArea = 2;
        break;
      case 3:
        this.showArea = 3;
        break;
      default:
        this.showArea = 0;
        break;
    }
  }
  today: Date;

  constructor() {}

  ngOnInit(): void {
    this.today = new Date();
    setInterval(() => {
      this.today = new Date();
    }, 1000);
  }
}
