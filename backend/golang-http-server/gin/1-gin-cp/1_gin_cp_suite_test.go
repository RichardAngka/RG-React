package main_test

import (
	"testing"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
)

func Test1GinCp(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "1GinCp Suite")
}
