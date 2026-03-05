import React from 'react'

const Review = () => {
  return (
    <div>
      <h2>오늘 배운 GitHub 순서</h2>
      <ul>
        <li>1. git add . (변경사항 담기)</li>
        <li>2. git commit -m "메시지" (기록 생성)</li>
        <li>3. git push origin 브랜치명 (GitHub 업로드)</li>
      </ul>
      <p>※ 처음에 연결할 때는 git remote add origin [주소] 잊지 말기!</p>
    </div>
  )
}

export default Review