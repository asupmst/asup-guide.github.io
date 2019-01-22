DR_EXPLAIN.namespace( 'DR_EXPLAIN.data_index' );
DR_EXPLAIN.data_index = {

	// index
	DREX_NODE_KEYWORDS: [2,5,6,7,2,3,4,4,3,7,5,2,6,2,5,6,2,5,7,5,7,2,7,5,6,6],
	DREX_NODE_KEYWORDS_START: [0,0,0,0,0,0,0,0,4,7,9,9,12,13,13,13,16,19,22,24,25,25,26,26], //length:= drex.nodes_count,
	DREX_NODE_KEYWORDS_END: [0,0,0,0,0,0,0,4,7,9,9,12,13,13,13,16,19,22,24,25,25,26,26,26], //length:= drex.nodes_count,

	DREX_KEYWORD_NAMES: ["<НОВОЕ КЛЮЧЕВОЕ СЛОВО>","Введите номер документа в ДО","заказ клиента","бюджет","статья бюджета","сделка","сопровождение","разработка"],
	DREX_KEYWORD_CHILD_START: [1,8,8,8,8,8,8,8],
	DREX_KEYWORD_CHILD_END: [8,8,8,8,8,8,8,8]
	
};