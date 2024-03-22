package org.ssafy.bibibig.member.application;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.ssafy.bibibig.common.dto.ErrorCode;
import org.ssafy.bibibig.common.exception.CommonException;
import org.ssafy.bibibig.member.domain.MemberEntity;
import org.ssafy.bibibig.member.dto.Member;
import org.ssafy.bibibig.member.dao.MemberRepository;

@Service
@RequiredArgsConstructor
public class SocialService {

    private final MemberRepository memberRepository;
    @Transactional
    public Member checkLogin (Member memberInfo) {
        try {
            MemberEntity memberEntity = memberRepository.findByEmail(memberInfo.getEmail())
                    .orElseGet(() -> memberRepository.save(memberInfo.toEntity()));

            return Member.from(memberEntity);

        } catch (Exception e) {
            throw new CommonException(ErrorCode.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }

}
