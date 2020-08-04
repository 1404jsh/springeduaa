package com.kh.portpolio.board.dao;

import java.util.List;

import javax.inject.Inject;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.kh.portfolio.board.dao.BoardDAO;
import com.kh.portfolio.board.dao.BoardDAOImplXML;
import com.kh.portfolio.board.vo.BoardCategoryVO;
import com.kh.portfolio.board.vo.BoardVO;

@ExtendWith(SpringExtension.class)
@ContextConfiguration(locations = {"file:src/main/webapp/WEB-INF/spring/*.xml"})
public class BoardDAOImplXMLTEST {

	private final static Logger logger
		= LoggerFactory.getLogger(BoardDAOImplXMLTEST.class);

//	private BoardDAO boardDAO = new BoardDAOImplXML();
	@Inject
	
	BoardDAO boardDAO;

	@Test
	@DisplayName("게시글 작성")
	@Disabled
	public void write() {
//		#{cid},
//		#{btitle},
//		#{id},
//		#{nickname},
//		#{bcontent},
		BoardVO boardVO = new BoardVO();
		BoardCategoryVO boardCategoryVO = new BoardCategoryVO();
		
		boardVO.setBoardCategoryVO(boardCategoryVO);
		boardVO.getBoardCategoryVO().setCid(1001);
		boardVO.setBtitle("테스트제목");
		boardVO.setBid("test1@test.com");
		boardVO.setBnickname("별칭1");
		boardVO.setBcontent("본문1");
		
		int result = boardDAO.write(boardVO);
		Assertions.assertEquals(1,result);
	}
@Test
@DisplayName("게시판 목록")
@Disabled
void list() {
	List<BoardVO> list = boardDAO.list();
	logger.info("레코드갯수:" + list.size());
	
//	list.stream().forEach((board)->{
//		System.out.println(board);
//	});
	list.stream().forEach(System.out::println);
//	logger.info("게시글 목록:" + list.toString());
}
@Test
@DisplayName("게시글 보기")
void view() {
	String bnum = "121";
	BoardVO boardVO = boardDAO.view(bnum);
	logger.info(boardVO.toString());
}
}