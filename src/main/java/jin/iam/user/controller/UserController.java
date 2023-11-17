package jin.iam.user.controller;

import jin.iam.commmon.dto.ApiResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.annotations.Parameter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@Tag(name = "유저 관련 API", description = "유저 관련 API 입니다.")
public class UserController {
    // 회원가입
    @PostMapping("/users/sign-up")
    @Operation(summary = "유저 회원가입", description = "ResponseDto를 통해 가입할 유저정보를 받아옵니다.")
    public ResponseEntity<ApiResponseDto> signup(
            @Parameter(description = "유저 정보를 받을 dto") @Valid @RequestBody SignupRequestDto requestDto,
            @Parameter(description = "유저프로필 생성시 등록할 첨부 파일") @RequestPart(value = "files", required = false) List<MultipartFile> files,
            BindingResult bindingResult
    ) throws IOException {
        // Validation 예외처리
        List<FieldError> fieldErrors = bindingResult.getFieldErrors();
        if (fieldErrors.size() > 0) {
            for (FieldError fieldError : bindingResult.getFieldErrors()) {
                log.error(fieldError.getField() + " 필드 : " + fieldError.getDefaultMessage());
            }
            throw new IllegalArgumentException("username은 4~10자이며 알파벳 소문자와 숫자로, password는 8~15자이며 알파벳 대소문자와 숫자, 특수문자로 구성하여 다시 시도해주세요.");
        } else {
            userService.signup(requestDto, files);
            return ResponseEntity.ok().body(new ApiResponseDto(HttpStatus.OK.value(), "회원가입이 완료되었습니다."));
        }
    }