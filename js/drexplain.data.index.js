DR_EXPLAIN.namespace( 'DR_EXPLAIN.data_index' );
DR_EXPLAIN.data_index = {

	// index
	DREX_NODE_KEYWORDS: [4,3,8,9,7,5,2,6,7,2,3,4,7,5,2,5,6,7,8,7,5,7,7,5,5,7,2,7,5,6,10,7,2,5,6,2,5,7,6],
	DREX_NODE_KEYWORDS_START: [0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,3,4,4,7,8,9,9,9,12,12,12,12,12,14,18,18,19,20,22,24,24,24,24,27,29,30,32,35,38,38,39,39,39,39,39,39,39,39,39,39,39], //length:= drex.nodes_count,
	DREX_NODE_KEYWORDS_END: [0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,3,4,4,7,8,9,9,9,12,12,12,12,12,14,18,18,19,20,22,24,24,24,24,27,29,30,32,35,38,38,39,39,39,39,39,39,39,39,39,39,39,39], //length:= drex.nodes_count,

	DREX_KEYWORD_NAMES: ["<НОВОЕ КЛЮЧЕВОЕ СЛОВО>","Введите номер документа в ДО","заказ клиента","бюджет","статья бюджета","сделка","сопровождение","разработка","отпуск","Планирование графика производства","тестирование"],
	DREX_KEYWORD_CHILD_START: [1,11,11,11,11,11,11,11,11,11,11],
	DREX_KEYWORD_CHILD_END: [11,11,11,11,11,11,11,11,11,11,11]
	
};