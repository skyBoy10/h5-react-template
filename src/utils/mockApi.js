import Mock from 'mockjs';
const Random = Mock.Random;

const desArrs = [
  {
    type: 1,
    label: '心理特质分析',
    list: [
      {
        min: 3,
        max: 12,
        score: Random.integer(4, 9),
        averageScore: 4,
        label: '抑郁倾向',
        result: '轻微',
        des: '你最近的情绪较为稳定。建议在遇到困难、感到迷茫或者伤心难过的时候和父母、老师或者朋友聊一聊，也可以开展自己喜欢的活动，适当的放松有利于更好的学习和生活',
      },
      {
        min: 3,
        max: 12,
        score: Random.integer(4, 9),
        averageScore: 4,
        label: '情绪调节能力',
        result: '较好',
        des: '你在生气或者沮丧的时候能注意到自己消极的情绪状态，很多时候你愿意主动做出改变，但有时也会陷入到负面情绪中无法自拔。你可以尝试思考情绪产生的原因，寻找解决问题的方法，主动调整自己的情绪。',
      },
      {
        min: 3,
        max: 12,
        score: Random.integer(4, 9),
        averageScore: 4,
        label: '心理韧性',
        result: '较好',
        des: '你在生气或者沮丧的时候能注意到自己消极的情绪状态，很多时候你愿意主动做出改变，但有时也会陷入到负面情绪中无法自拔。你可以尝试思考情绪产生的原因，寻找解决问题的方法，主动调整自己的情绪。'
      },
    ]
  },
  {
    type: 1,
    label: '社会支持分析',
    list: [
      {
        min: 3,
        max: 12,
        score: Random.integer(4, 9),
        averageScore: 4,
        label: '父母卷入性',
        result: '中度',
        des: '父母对孩子教育给予了一定关注，教师可以通过多与家长交流，提高家长对学生学习的重视程度'
      },
      {
        min: 3,
        max: 12,
        score: Random.integer(4, 9),
        averageScore: 4,
        label: '支持类型',
        result: '理解鼓励型',
        des: '家长把孩子视为独立的个体，注重孩子的主动精神，经常与孩子交流，充分尊重孩子的要求和意见，培养他们的自理和自制能力。有利于孩子建立独立意识和自信心，善于自我控制和解决问题，社交能力较好，并且具有社会责任感。'
      },
    ]
  },
]

const scoArrs = [
  {
    type: 2,
    label: '学习能力',
    min: 0,
    max: 12,
    scores: [
      {
        myScore: Random.integer(3, 12),
        averageScore: Random.integer(3, 12),
        type: '记忆力',
        result: '记忆力较好',
        des: '学习中，你能完成一定的记忆内容，掌握一些记忆方法，但是你还可以做的更好。建议你在今后的学习过程中观察自己最适合的记忆策略，强化记忆效果。'
      },
      {
        myScore: Random.integer(3, 12),
        averageScore: Random.integer(3, 12),
        type: '注意力',
        result: '注意力有待提高',
        des: '在写作业或者独立学习时，你可能注意力难以集中，经常分心、走神，难以长时间的投入到学习中。建议你在开始学习前尽量创设一个无干扰的学习环境，避免学习过程中的分心。'
      },
      {
        myScore: Random.integer(3, 12),
        averageScore: Random.integer(3, 12),
        type: '思维能力',
        result: '思维能力较好',
        des: '有较好的思维能力和探索精神，能主动归纳所学知识，但是还需要进一步强化钻研精神和思维技巧，教师可以提示学生重视所学内容的内部逻辑结构，多设置一些需要学生理解知识之间关系才能答对的题目，引发学生的思考。'
      }
    ],
    list: [
      {
        result: '记忆力较好',
        des: '学习中，你能完成一定的记忆内容，掌握一些记忆方法，但是你还可以做的更好。建议你在今后的学习过程中观察自己最适合的记忆策略，强化记忆效果。'
      },
      {
        result: '注意力有待提高',
        des: '在写作业或者独立学习时，你可能注意力难以集中，经常分心、走神，难以长时间的投入到学习中。建议你在开始学习前尽量创设一个无干扰的学习环境，避免学习过程中的分心。'
      },
      {
        result: '思维能力较好',
        des: '有较好的思维能力和探索精神，能主动归纳所学知识，但是还需要进一步强化钻研精神和思维技巧，教师可以提示学生重视所学内容的内部逻辑结构，多设置一些需要学生理解知识之间关系才能答对的题目，引发学生的思考。'
      }
    ]
  },
  {
    type: 2,
    label: '学习动力',
    min: 0,
    max: 12,
    scores: [
      {
        myScore: Random.integer(3, 12),
        averageScore: Random.integer(3, 12),
        type: '学习态度',
        result: '记学习态度有待提高',
        des: '学习中，你能完成的记忆内容，掌握一些记忆方法，但是你还可以做的更好。建议你在今后的学习过程中观察自己最适合的记忆策略，强化记忆效果。'
      },
      {
        myScore: Random.integer(3, 12),
        averageScore: Random.integer(3, 12),
        type: '学习价值',
        result: '学习价值感有待提高',
        des: '你可能认为学习是为了获得他人的认可或单纯功利性的目的，有时你甚至找不到学习的意义。不必担心，建议你多采用游戏化的方式来进行后续学习，慢慢发现学习中的乐趣。'
      },
      {
        myScore: Random.integer(3, 12),
        averageScore: Random.integer(3, 12),
        type: '学习压力',
        result: '学习压力一般',
        des: '有较好的思维能力和和和和探索精神，能主动归纳所学知识，但是还需要进一步强化钻研精神和思维技巧，教师可以提示学生重视所学内容的内部逻辑结构，多设置一些需要学生理解知识之间关系才能答对的题目，引发学生的思考。'
      }
    ],
    list: [
      {
        result: '记学习态度有待提高',
        des: '学习中，你能完成的记忆内容，掌握一些记忆方法，但是你还可以做的更好。建议你在今后的学习过程中观察自己最适合的记忆策略，强化记忆效果。'
      },
      {
        result: '学习价值感有待提高',
        des: '你可能认为学习是为了获得他人的认可或单纯功利性的目的，有时你甚至找不到学习的意义。不必担心，建议你多采用游戏化的方式来进行后续学习，慢慢发现学习中的乐趣。'
      },
      {
        result: '学习压力一般',
        des: '有较好的思维能力和和和和探索精神，能主动归纳所学知识，但是还需要进一步强化钻研精神和思维技巧，教师可以提示学生重视所学内容的内部逻辑结构，多设置一些需要学生理解知识之间关系才能答对的题目，引发学生的思考。'
      }
    ]
  },
  {
    type: 2,
    label: '元认知策略',
    min: 0,
    max: 12,
    scores: [
      {
        myScore: Random.integer(3, 12),
        averageScore: Random.integer(3, 12),
        type: '学习监控',
        result: '学习监控能力有待提高',
        des: '学习中，你能完的记忆内容，掌握一些记忆方法，但是你还可以做的更好。建议你在今后的学习过程中观察自己最适合的记忆策略，强化记忆效果。'
      },
      {
        myScore: Random.integer(3, 12),
        averageScore: Random.integer(3, 12),
        type: '学习计划',
        result: '学习计划能力有待提高',
        des: '你可能认为学习为了获得他人的认可或单纯功利性的目的，有时你甚至找不到学习的意义。不必担心，建议你多采用游戏化的方式来进行后续学习，慢慢发现学习中的乐趣。'
      },
      {
        myScore: Random.integer(3, 12),
        averageScore: Random.integer(3, 12),
        type: '学习调节',
        result: '学习调节能力一般',
        des: '有较好的思维能力和和探索精神，能主动归纳所学知识，但是还需要进一步强化钻研精神和思维技巧，教师可以提示学生重视所学内容的内部逻辑结构，多设置一些需要学生理解知识之间关系才能答对的题目，引发学生的思考。'
      }
    ],
    list: [
      {
        result: '学习监控能力有待提高',
        des: '学习中，你能完的记忆内容，掌握一些记忆方法，但是你还可以做的更好。建议你在今后的学习过程中观察自己最适合的记忆策略，强化记忆效果。'
      },
      {
        result: '学习计划能力有待提高',
        des: '你可能认为学习为了获得他人的认可或单纯功利性的目的，有时你甚至找不到学习的意义。不必担心，建议你多采用游戏化的方式来进行后续学习，慢慢发现学习中的乐趣。'
      },
      {
        result: '学习调节能力一般',
        des: '有较好的思维能力和和探索精神，能主动归纳所学知识，但是还需要进一步强化钻研精神和思维技巧，教师可以提示学生重视所学内容的内部逻辑结构，多设置一些需要学生理解知识之间关系才能答对的题目，引发学生的思考。'
      }
    ]
  }
];

const behaviors = [
  {
    type: 3,
    label: '学习风格',
    list: [
      {
        type: '视觉型',
        score: Random.integer(3, 12),
        des: '学习中对视觉信息更为敏感，对语音信息相对淡漠，教师应该提供更多视觉信息作为学习材料，同时加强对语音信息的接受能力。'
      },
      {
        type: '感悟型',
        score: Random.integer(3, 12),
        des: '学习中对视觉信息更为敏感，对语音信息相对淡漠，教师应该提供更多视觉信息作为学习材料，同时加强对语音信息的接受能力'
      },
      {
        type: '综合型',
        score: Random.integer(3, 12),
        des: '学习中对视觉信息更为敏感，对语音信息相对淡漠，教师应该提供更多视觉信息作为学习材料，同时加强对语音信息的接受能力。'
      },
      {
        type: '活跃型',
        score: Random.integer(3, 12),
        des: '学习中对视觉信息更为敏感，对语音信息相对淡漠，教师应该提供更多视觉信息作为学习材料，同时加强对语音信息的接受能力。'
      }
    ]
  },
  {
    type: 3,
    label: '同伴交往风格',
    result: '协助型',
    des: '积极参与学习活动，善于小组合作，同伴交往较好，教师应该适当培养其独立学习的能力，减少同伴依赖性。'
  },
  {
    type: 3,
    label: '教师授课风格',
    result: '权威型',
    des: '积极参与学习活动，善于小组合作，同伴交往较好，教师应该适当培养其独立学习的能力，减少同伴依赖性。'
  },
  {
    type: 3,
    label: '网络成瘾',
    typeName: '网络成瘾程度',
    result: '很低',
    des: '你总是能很好的协调网络和学习之间的关系，对网络依赖的程度很低，自控能力较好。建议你继续保持良好的上网习惯。'
  }
];

/**
 * 获取基本信息
 */
const getBaseInfo = () => {
  return {
      code: 0,
      message: '',
      data: {
        comprehensive: "由于心理测评报告的结果表述有时会比较繁琐，所以需要有个理出头绪，找出主线的清理归纳过程。这个过程需要找出一些和职业上所需要具备的能力素质的相关描述，去除一些无关的修饰形容词或者逻辑性表述话语。也就是说，要把整个书面语言所要表达的最简单、最直观的精神内涵提炼出来。需要值得注意的是，去粗取精的关键是看筛选的标准，举个比较形象化的表达就是设定筛网网眼的大小尺寸。如果网眼开得太大，那筛下来的东西粗细不均匀，没有起到筛选的效果。如果网眼开得太小，也可能把一些有用的东西屏蔽掉了，漏掉了很多可以再挖掘的材料。",
        userPic: 'https://web-data.zmlearn.com/image/qH7gvUcxai7SYqGkghGfTL/%E6%A4%AD%E5%9C%86%E5%BD%A2.png',
        gradeId: 13,
        gradeName: '高三',
        name: '王刚'
      }
  };
}

const initData = (type) => {
  const arrs = [];
  if (type === 1) { // 属性特征
    desArrs.forEach((item) => {
      item.list.forEach(des => {
        des.score = Random.integer(3, 12);
      })
    })
    arrs.push(...desArrs);

    return arrs;
  }

  if (type === 2) {
    arrs.push(...scoArrs);

    return arrs;
  }

  arrs.push(...behaviors);
  return arrs;
}

/**
 * 获取测评属性信息
 */
const getDataByProp = (param) => {
  const { types } = JSON.parse(param.body);
  const arrs = [];
  for (let i = 0; i < types.length; i += 1) {
    const temp = initData(types[i]);
    arrs.push(...temp);
  }
  return {
      code: 0,
      message: '',
      data: arrs
  };
}

Mock.mock('/test/getBaseInfo', /post/i, getBaseInfo);
Mock.mock('/test/getPropData', /post/i, getDataByProp);


const desArrs = [
  {
    id: 100,
    type: 1,
    title: '心理特质分析',
    list: [
      {
        minScore: 3,
        maxScore: 12,
        myScore: Random.integer(4, 9),
        averageScore: 4,
        label: '抑郁倾向',
        result: '轻微',
        comment: '你最近的情绪较为稳定。建议在遇到困难、感到迷茫或者伤心难过的时候和父母、老师或者朋友聊一聊，也可以开展自己喜欢的活动，适当的放松有利于更好的学习和生活',
      },
      {
        minScore: 3,
        maxScore: 12,
        myScore: Random.integer(4, 9),
        averageScore: 4,
        label: '情绪调节能力',
        result: '较好',
        comment: '你在生气或者沮丧的时候能注意到自己消极的情绪状态，很多时候你愿意主动做出改变，但有时也会陷入到负面情绪中无法自拔。你可以尝试思考情绪产生的原因，寻找解决问题的方法，主动调整自己的情绪。',
      },
      {
        minScore: 3,
        maxScore: 12,
        myScore: Random.integer(4, 9),
        averageScore: 4,
        label: '心理韧性',
        result: '较好',
        comment: '你在生气或者沮丧的时候能注意到自己消极的情绪状态，很多时候你愿意主动做出改变，但有时也会陷入到负面情绪中无法自拔。你可以尝试思考情绪产生的原因，寻找解决问题的方法，主动调整自己的情绪。'
      },
    ]
  },
  {
    id: 100,
    type: 1,
    title: '社会支持分析',
    list: [
      {
        minScore: 3,
        maxScore: 12,
        myScore: Random.integer(4, 9),
        averageScore: 4,
        label: '父母卷入性',
        result: '中度',
        comment: '父母对孩子教育给予了一定关注，教师可以通过多与家长交流，提高家长对学生学习的重视程度'
      },
      {
        minScore: 3,
        maxScore: 12,
        myScore: Random.integer(4, 9),
        averageScore: 4,
        label: '支持类型',
        result: '理解鼓励型',
        comment: '家长把孩子视为独立的个体，注重孩子的主动精神，经常与孩子交流，充分尊重孩子的要求和意见，培养他们的自理和自制能力。有利于孩子建立独立意识和自信心，善于自我控制和解决问题，社交能力较好，并且具有社会责任感。'
      },
    ]
  },
]

const scoArrs = [
  {
    id: 101,
    type: 2,
    title: '学习能力',
    minScore: 0,
    maxScore: 12,
    list: [
      {
        myScore: Random.integer(3, 12),
        averageScore: Random.integer(3, 12),
        label: '记忆力',
        result: '记忆力较好',
        comment: '学习中，你能完成一定的记忆内容，掌握一些记忆方法，但是你还可以做的更好。建议你在今后的学习过程中观察自己最适合的记忆策略，强化记忆效果。'
      },
      {
        myScore: Random.integer(3, 12),
        averageScore: Random.integer(3, 12),
        label: '注意力',
        result: '注意力有待提高',
        comment: '在写作业或者独立学习时，你可能注意力难以集中，经常分心、走神，难以长时间的投入到学习中。建议你在开始学习前尽量创设一个无干扰的学习环境，避免学习过程中的分心。'
      },
      {
        myScore: Random.integer(3, 12),
        averageScore: Random.integer(3, 12),
        label: '思维能力',
        result: '思维能力较好',
        comment: '有较好的思维能力和探索精神，能主动归纳所学知识，但是还需要进一步强化钻研精神和思维技巧，教师可以提示学生重视所学内容的内部逻辑结构，多设置一些需要学生理解知识之间关系才能答对的题目，引发学生的思考。'
      }
    ],
  },
  {
    id: 101,
    type: 2,
    title: '学习动力',
    minScore: 0,
    maxScore: 12,
    list: [
      {
        myScore: Random.integer(3, 12),
        averageScore: Random.integer(3, 12),
        label: '学习态度',
        result: '记学习态度有待提高',
        comment: '学习中，你能完成的记忆内容，掌握一些记忆方法，但是你还可以做的更好。建议你在今后的学习过程中观察自己最适合的记忆策略，强化记忆效果。'
      },
      {
        myScore: Random.integer(3, 12),
        averageScore: Random.integer(3, 12),
        label: '学习价值',
        result: '学习价值感有待提高',
        comment: '你可能认为学习是为了获得他人的认可或单纯功利性的目的，有时你甚至找不到学习的意义。不必担心，建议你多采用游戏化的方式来进行后续学习，慢慢发现学习中的乐趣。'
      },
      {
        myScore: Random.integer(3, 12),
        averageScore: Random.integer(3, 12),
        label: '学习压力',
        result: '学习压力一般',
        comment: '有较好的思维能力和和和和探索精神，能主动归纳所学知识，但是还需要进一步强化钻研精神和思维技巧，教师可以提示学生重视所学内容的内部逻辑结构，多设置一些需要学生理解知识之间关系才能答对的题目，引发学生的思考。'
      }
    ],
  },
  {
    id: 101,
    type: 2,
    title: '元认知策略',
    minScore: 0,
    maxScore: 12,
    list: [
      {
        myScore: Random.integer(3, 12),
        averageScore: Random.integer(3, 12),
        label: '学习监控',
        result: '学习监控能力有待提高',
        comment: '学习中，你能完的记忆内容，掌握一些记忆方法，但是你还可以做的更好。建议你在今后的学习过程中观察自己最适合的记忆策略，强化记忆效果。'
      },
      {
        myScore: Random.integer(3, 12),
        averageScore: Random.integer(3, 12),
        label: '学习计划',
        result: '学习计划能力有待提高',
        comment: '你可能认为学习为了获得他人的认可或单纯功利性的目的，有时你甚至找不到学习的意义。不必担心，建议你多采用游戏化的方式来进行后续学习，慢慢发现学习中的乐趣。'
      },
      {
        myScore: Random.integer(3, 12),
        averageScore: Random.integer(3, 12),
        label: '学习调节',
        result: '学习调节能力一般',
        comment: '有较好的思维能力和和探索精神，能主动归纳所学知识，但是还需要进一步强化钻研精神和思维技巧，教师可以提示学生重视所学内容的内部逻辑结构，多设置一些需要学生理解知识之间关系才能答对的题目，引发学生的思考。'
      }
    ],
  }
];

const behaviors = [
  {
    id: 102,
    type: 3,
    title: '学习风格',
    list: [
      {
        label: '视觉型',
        myScore: Random.integer(3, 12),
        comment: '学习中对视觉信息更为敏感，对语音信息相对淡漠，教师应该提供更多视觉信息作为学习材料，同时加强对语音信息的接受能力。'
      },
      {
        label: '感悟型',
        myScore: Random.integer(3, 12),
        comment: '学习中对视觉信息更为敏感，对语音信息相对淡漠，教师应该提供更多视觉信息作为学习材料，同时加强对语音信息的接受能力'
      },
      {
        label: '综合型',
        myScore: Random.integer(3, 12),
        comment: '学习中对视觉信息更为敏感，对语音信息相对淡漠，教师应该提供更多视觉信息作为学习材料，同时加强对语音信息的接受能力。'
      },
      {
        label: '活跃型',
        myScore: Random.integer(3, 12),
        comment: '学习中对视觉信息更为敏感，对语音信息相对淡漠，教师应该提供更多视觉信息作为学习材料，同时加强对语音信息的接受能力。'
      }
    ]
  },
  {
    id: 102,
    type: 3,
    title: '同伴交往风格',
    label: '协助型',
    comment: '积极参与学习活动，善于小组合作，同伴交往较好，教师应该适当培养其独立学习的能力，减少同伴依赖性。'
  },
  {
    id: 102,
    type: 3,
    title: '教师授课风格',
    label: '权威型',
    comment: '积极参与学习活动，善于小组合作，同伴交往较好，教师应该适当培养其独立学习的能力，减少同伴依赖性。'
  },
  {
    id: 102,
    type: 3,
    title: '网络成瘾',
    label: '网络成瘾程度',
    result: '很低',
    comment: '你总是能很好的协调网络和学习之间的关系，对网络依赖的程度很低，自控能力较好。建议你继续保持良好的上网习惯。'
  }
];

/**
 * 获取基本信息
 */
const getBaseInfo = () => {
  return {
      code: 0,
      message: '',
      data: {
        comprehensiveResult: '学习心理状态较好',
        comprehensiveComment: "由于心理测评报告的结果表述有时会比较繁琐，所以需要有个理出头绪，找出主线的清理归纳过程。这个过程需要找出一些和职业上所需要具备的能力素质的相关描述，去除一些无关的修饰形容词或者逻辑性表述话语。也就是说，要把整个书面语言所要表达的最简单、最直观的精神内涵提炼出来。需要值得注意的是，去粗取精的关键是看筛选的标准，举个比较形象化的表达就是设定筛网网眼的大小尺寸。如果网眼开得太大，那筛下来的东西粗细不均匀，没有起到筛选的效果。如果网眼开得太小，也可能把一些有用的东西屏蔽掉了，漏掉了很多可以再挖掘的材料。",
        tabs: [
          {
            id: 100,
            name: '属性特征',
            sort: 1,
          },
          {
            id: 101,
            name: '素养特征',
            sort: 2,
          },
          {
            id: 102,
            name: '行为特征',
            sort: 3,
          }
        ]
      }
  };
};

/**
 * 获取基本信息
 */
const getStudentInfo = () => {
  return {
      code: 0,
      message: '',
      data: {
        headPortrait: 'https://web-data.zmlearn.com/image/qH7gvUcxai7SYqGkghGfTL/%E6%A4%AD%E5%9C%86%E5%BD%A2.png',
        gradeId: 13,
        gradeName: '高三',
        name: '王刚'
      }
  };
}

const initData = (type) => {
  const arrs = [];
  if (type === 1) { // 属性特征
    arrs.push(...desArrs);

    return arrs;
  }

  if (type === 2) {
    arrs.push(...scoArrs);

    return arrs;
  }

  arrs.push(...behaviors);
  return arrs;
}

/**
 * 获取测评属性信息
 */
const getDataByProp = (param) => {
  const { types } = JSON.parse(param.body);
  const arrs = [];
  for (let i = 0; i < types.length; i += 1) {
    const temp = initData(types[i]);
    arrs.push(...temp);
  }
  return {
      code: 0,
      message: '',
      data: arrs
  };
}

Mock.mock('/mock/getStuInfo', /post/i, getStudentInfo);
Mock.mock('/mock/getBaseInfo', /post/i, getBaseInfo);
Mock.mock('/mock/getPropData', /post/i, getDataByProp);