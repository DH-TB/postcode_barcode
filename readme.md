    1.主函数 print,
      输入： zipcode: '45056-1234',
      输出： barcode: '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|'
      输入： zipcode: '450561234',
      输出： barcode: '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|'
      输入：zipcode: '45056'
      输出：barcode: '|:|::|:|:|:||::::|:|::||::||:::|'
      预估时间：30 minute
      实际时间：20 minute
      原因：因为先实现了所有子函数，所以一次就通过了。
    2.函数 buildInputs,
      输入：45056
      输出：['4', '5', '0', '5', '6'];
      输入：45056-1234
      输出：['4', '5', '0', '5', '6', '1', '2', '3', '4']
      预估时间
      实际时间：
      超时原因：,
    3.函数 buildPostCode,
      输入：['4', '5', '0', '5', '6']
      输出：;
      输入：['4', '5', '0', '5', '6', '1', '2', '3', '4']
      输出：
      预估时间
      实际时间：
      超时原因：,
    4.函数 buildCode,
      输入：
      输出：
      预估时间
      实际时间：
      超时原因：:,
    5.函数 buildCodeText,
      输入：
      输出：
      预估时间
      实际时间：
      超时原因：: