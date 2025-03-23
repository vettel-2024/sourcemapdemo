import axios from 'axios';
import sourceMap from 'source-map-js';

export const getSourceMap = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
}

export const findCodeBySourceMap = async (stackFrame: any) => {
  // 获取sourceMap
  const sourceData = await getSourceMap(stackFrame.fileName + '.map');
  const fileContent = sourceData.data;

  // 解析sourceMap
  const consumer = await new sourceMap.SourceMapConsumer(fileContent);

  // 通过报错的位置查找对应的源文件的名称以及报错行数
  const originalPosition = consumer.originalPositionFor({
    line: stackFrame.lineNumber,
    column: stackFrame.columnNumber || 0
  })

  const code = consumer.sourceContentFor(originalPosition.source); // 获取源文件的内容

  console.log(code);
  
}
