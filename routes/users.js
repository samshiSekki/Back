const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')
const ScheduleController = require('../controllers/ScheduleController')

// 유저 정보 조회
router.get('/:userId', UserController.showUser)

// 닉네임 수정
router.post('/:userId/profile', UserController.editNickname)

// 스터디 지원서 조회
router.get('/:userId/application', UserController.showApplication)

// 찜한 스터디 조회
router.get('/:userId/like-studylist', UserController.likeStudyList)

// 신청한 스터디 조회
router.get('/:userId/apply-studylist', UserController.applyStudyList)

// 스터디 신청 취소
router.delete('/:userId/apply-studylist/:applicationId', UserController.cancelStudy);

// 개설한 스터디 조회
router.get('/:userId/opened-studylist', UserController.openedStudyList)

// 개설한 스터디에서 스터디 시작하기
router.put('/:userId/opened-studylist/:studyId', UserController.startStudy)

// 개설한 스터디 상세보기 지원서 조회 - 스터디원 수락/거절 
router.put('/:userId/opened-studylist/manageMember/:applicationId', UserController.manageMember)

// 참여 스터디 조회 (여기서 스터디 정보 다 보내줘야 함) 
router.get('/:userId/ongoing-studylist', UserController.ongoingStudyList)

// 참여 스터디 과제 부여
router.post('/:userId/ongoing-studylist/:studyId/giveAssignment', UserController.giveAssignment)

// 참여 스터디 과제 완료 체크
router.post('/:userId/ongoing-studylist/:studyId/checkAssignment', UserController.checkAssignment)

//참여 스터디 일정 조율
router.get('/:userId/ongoing-studylist/:studyId/schedule', ScheduleController.schedule)
router.post('/:userId/ongoing-studylist/:studyId/schedule', ScheduleController.scheduleSave)
router.put('/:userId/ongoing-studylist/:studyId/schedule', ScheduleController.scheduleUpdate)

//참여 스터디 공통 일정
router.get('/:userId/ongoing-studylist/:studyId/schedule-common', ScheduleController.scheduleCommon)

// // 과제 테스트
// router.post('/uploadFileWithOriginalFilename', uploadWithOriginalFilename.single('attachment'), function(req,res){ // 5
//     res.render('confirmation', { file:req.file, files:null });
// });


module.exports = router;