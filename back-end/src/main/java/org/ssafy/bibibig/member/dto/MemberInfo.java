package org.ssafy.bibibig.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;
import org.ssafy.bibibig.member.domain.Member;

@AllArgsConstructor
@Getter
@ToString
public class MemberInfo {
    private Long id;
    private String name;
    private String email;

    public static MemberInfo of(Long id, String name, String email){
        return new MemberInfo(id, name, email);
    }

    public Member toEntity(){
        return Member.of(id, name, email,null);
    }

    public static MemberInfo from(Member entity){
        return MemberInfo.of(
                entity.getId(),
                entity.getName(),
                entity.getEmail()
        );

    }
}