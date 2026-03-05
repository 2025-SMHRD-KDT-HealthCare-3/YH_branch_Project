import React from 'react'

const Review = () => { // 대문자로 변경
  return (
    <div>
        <h1>오늘 내용 복습하기</h1>
        <hr />

        <h2>GitHub 순서</h2>
        <ol> {/* 순서가 있는 리스트로 감싸기 */}
            <li><code>git add</code> 파일명을 작성</li>
            <li><code>git commit -m "커밋 메세지"</code></li>
            <li><code>git push origin projectJun</code></li>
        </ol>

        {/* 팀원이 꼭 기억해야 할 다음 단계 */}
        <blockquote>
            <p>💡 Push 후에는 GitHub 사이트에서 <strong>Pull Request</strong>를 생성하세요!</p>
        </blockquote>
    </div>
  )
}

export default Review 