/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxb1437851f30c1ab3',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'f85d1ffdef4c1bedf98d1589843a6aec',

  PROVINCE: '新疆',
  CITY: '库尔勒',

  SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: false,

    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: true,

    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: false,

    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: false,

    // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    momentCopyrighting: false,

    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: false,

    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: false,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: true,

    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,

    /** 学生课表 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    courseSchedule: true,
  },


  USERS: [
    {
	  openurl: "https://music.163.com/song?id=473285827&userid=430633625",
      // 想要发送的人的名字
      name: '文静小宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oR9X45zu65-bw7Vq41ME0qOvTBjg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '1',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-20',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: 'ALIEN', year: '2001', date: '04-03',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '文静', year: '2000', date: '01-20',
        },
        {
          type: '节日', name: '表白纪念日', year: '2022', date: '04-22',
        },
        {
          type: '节日', name: '新年春节', year: '2022', date: '01-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-04-22' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-01-22' },
      ],
    },
      courseSchedule {
        // 单双周的基准
        benchmark: {
          // 这里设置一个日期，用来作为判断课表是否单双周的依据
          date: '2022-09-23',
          // 该日期是否为单周
          isOdd: true
        },
        // 课表
        courses: {
          // 单周课表
          // 从星期一到星期日（星期六和星期日的课表数组可不填写）
          odd: [
            // 例子，周一的课表
            [
              '08:30-09:50 商务英语笔译',
              '10:10-11:30 高级商务英语',
			  '13:30-14:50 微观经济学',
			  '15:10-16:30 形式与政策'
            ],
            // 周二
            [
              '13:30-14:50 国际商务谈判',
              '15:10-16:30 跨国公司管理'
            ],
            // 周三
            [
              '08:30-09:50 智能数据挖掘',
              '10:10-11:30 高级商务英语'
            ],
            // 周四
            [
              '10:10-11:30 毛泽东思想和中国特色社会主义理论体系'
            ],
            // 周五
            [
              '08:30-09:50 电子商务'
            ],
            // 周六
            [],
            // 周日
            []
          ],
          // 双周课表
          even: [
            [],
            [],
            [],
            [],
            [],
            [],
            []
          ]
        }
      },
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '11',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oR9X450TZt3bpyjoI2ULpaIM0sVg',
    }
  ],

}

module.exports = USER_CONFIG

